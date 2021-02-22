package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"regexp"
	"strconv"
	"strings"
)

type DatosServidor struct {
	Servidor1 string
	Servidor2 string
}

type Datos struct {
	RAM  string
	USOR string
	OCUR string
	CPU  string
}

type Process struct {
	pid     int
	nombre  string
	estado  string
	memoria float64
	usuario int
	p_pid   float32
}

type test_struct struct {
	pid float32
}
type Response struct {
	Status string      `json:"status"`
	Data   interface{} `json:"data"`
}

func monitoreo(w http.ResponseWriter, r *http.Request) {
	//reviso que si la peticion es post
	/*	if r.Method == "POST" {
		ajax_post_data := r.FormValue("ajax_post_data")
		fmt.Println("Receive ajax post data string ", ajax_post_data)
		fmt.Println();
		w.Write([]byte(datosServ()))
	}*/

	//muestro la pagina original
	t, err := template.ParseFiles("index.html") //parse the html file homepage.html
	if err != nil {                             // if there is an error
		log.Print("Error de parsing de la plantilla: ", err) // log it
	}
	datos := DatosServidor{}

	err = t.Execute(w, datos) //execute the template and pass it the HomePageVars struct to fill in the gaps
	if err != nil {           // if there is an error
		log.Print("template executing error: ", err) //log it
	}

}

func memory(w http.ResponseWriter, r *http.Request) {
	nombreArchivo := "/proc/mem_201314631"
	content, err := ioutil.ReadFile(nombreArchivo)
	if err != nil {
		panic(err)
	}
	w.Write(content)
}

func cpu(w http.ResponseWriter, r *http.Request) {
	nombreArchivo := "/proc/cpu_201314631"
	content, err := ioutil.ReadFile(nombreArchivo)
	if err != nil {
		panic(err)
	}
	content = content[:len(content)-1]
	w.Write(content)
}

func kill(w http.ResponseWriter, r *http.Request) {

	switch r.Method {
	case "GET":
		pids, ok := r.URL.Query()["pid"]

		if !ok || len(pids[0]) < 1 {
			log.Println("Url Param 'pid' is missing")
			return
		}

		// Query()["key"] will return an array of items,
		// we only want the single item.
		pid := pids[0]
		i2, err := strconv.Atoi(pid)
		killProcess(i2)
		resp := Response{Status: "200", Data: "OK"}
		js, err := json.Marshal(resp)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "application/json")
		w.Write(js)
	default:
		fmt.Fprintf(w, "Unsupported method")
	}
}

func killProcess(pid int) {
	proc, err := os.FindProcess(pid)
	if err != nil {
		log.Println(err)
	}
	// Kill the process
	proc.Kill()
}

//main
func main() {
	fs := http.FileServer(http.Dir("./dist"))
	http.Handle("/", fs)
	http.HandleFunc("/cpu", cpu)
	http.HandleFunc("/memory", memory)
	http.HandleFunc("/kill", kill)
	//vamos a mostrarlo en el puerto 8080
	http.ListenAndServe(":4000", nil)
	log.Fatal(http.ListenAndServe(":4000", nil))
}

func datosServ() string {
	return string_servidor1() + "?" + " "
}

//Aca se va a leer el modulo creado mem_201314631
func string_servidor1() string {
	//veo la informacion de la memoria
	nombreArchivo := "/proc/mem_201314631" ///proc/mem_201314631
	content, err := ioutil.ReadFile(nombreArchivo)
	retorno := ""
	if err != nil {
	}

	//SPLIT DEL JSON

	//leo linea por linea
	lines := strings.Split(string(content), "\n")
	re := regexp.MustCompile("[0-9]+") //regex

	//Los datos ya vienen en mb
	match := re.FindStringSubmatch(lines[0])
	mem_total := match[0]
	mem_t2, err := strconv.Atoi(mem_total)
	if err == nil {
	}
	retorno += fmt.Sprintf("%f", float32(mem_t2)*0.001) + "%"

	match = re.FindStringSubmatch(lines[1])
	mem_libre := match[0]
	mem_l2, err := strconv.Atoi(mem_libre)
	if err == nil {
	}

	match = re.FindStringSubmatch(lines[3])
	mem_libre3 := match[0]
	mem_l3, err := strconv.Atoi(mem_libre3)
	if err == nil {
	}

	match = re.FindStringSubmatch(lines[4])
	mem_libre4 := match[0]
	mem_l4, err := strconv.Atoi(mem_libre4)
	if err == nil {
	}

	//procentaje
	porcentaje1 := (1 - ((float32(mem_l2) + float32(mem_l3) + float32(mem_l4)) / float32(mem_t2))) * 100
	porcentaje2 := ((float32(mem_l2) + float32(mem_l3) + float32(mem_l4)) / float32(mem_t2)) * 100
	retorno += fmt.Sprintf("%f", porcentaje1) + "%" + fmt.Sprintf("%f", porcentaje2) + "%"

	//retorno
	return retorno
}
