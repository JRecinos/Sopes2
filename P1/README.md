# Dependencias
* GCC
* MAKE
* GIT
* GO

> es necesario que verifique si cuenta con los linux-header para su kernel instalado

# Instalacion

$ **cd /**

$ **sudo groupadd sopes2**

$ **sudo mkdir practica1**

$ **sudo chmod ug=rwx practica1**

$ **sudo chmod o=r practica1**

$ **sudo chgrp sopes2 practica1**

$ **sudo chown -v grupo32 practica1**

$ **cd /practica1**

$ **git clone https://github.com/JeShaMC13/practica1_grupo32_so2.git**

## Modulo de Memoria

$ **cd /practica1/practica1_grupo32_so2/Modulos/ModuloMemoria**

> compilar el modulo de kernel

$ **make all**

> montar el modulo al kernel    

$ **sudo insmod mem_grupo32.ko**

> verificar mensaje de montado exitoso

$ **dmesg**

> listar por modulos montados

$ **lsmod**

> para visualizar informacion generado por el modulo
> ingresar a /proc e imprimir el valor del archivo mem_grupo32

$ **cd /proc**

$ **cat mem_grupo32**

> para desmontar el modulo del kernel

$ **sudo rmmod mem_grupo32**

> verificar mensaje de desmontado exitoso

$ **dmesg**

> por ultimo limpiar la carpeta de los binarios generados

$ **make clean**

## Modulo de Procesos

$ **cd /practica1/practica1_grupo32_so2/Modulos/ModuloCpu**

> compilar el modulo de kernel

$ **make all**

> montar el modulo al kernel

$ **sudo insmod cpu_grupo32.ko**

> verificar mensaje de montado exitoso

$ **dmesg**

> listar por modulos montados

$ **lsmod**

> para visualizar informacion generado por el modulo
> ingresar a /proc e imprimir el valor del archivo cpu_grupo32

$ **cd /proc**

$ **cat cpu_grupo32**

> para desmontar el modulo del kernel

$ **sudo rmmod cpu_grupo32**

> verificar mensaje de desmontado exitoso

$ **dmesg**

> por ultimo limpiar la carpeta de los binarios generados

$ **make clean**