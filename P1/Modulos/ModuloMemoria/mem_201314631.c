#include <linux/proc_fs.h>
#include <linux/seq_file.h> 
#include <asm/uaccess.h> 
#include <linux/hugetlb.h>
#include <linux/module.h>
#include <linux/init.h>
#include <linux/kernel.h>   
#include <linux/fs.h>

#define BUFSIZE  	150

MODULE_LICENSE("GPL");
MODULE_AUTHOR("Jorge Mario Recinos Dieguez");
MODULE_DESCRIPTION("Modulo de RAM - Sistemas Operativos 1");

struct sysinfo inf;

static int escribir_archivo(struct seq_file * archivo, void *v) {	
    si_meminfo(&inf);
    long total_memoria 	= (inf.totalram /1024) * 4;
    long memoria_libre 	= (inf.freeram /1024) * 4;
    long memBuffer = (inf.bufferram /1024) * 4;
    long memCache = (inf.sharedram/1024) * 4;
    seq_printf(archivo, "{");
    seq_printf(archivo, "\"mem_total\":%8lu,\n",total_memoria);
    seq_printf(archivo, "\"mem_free\":%8lu,\n", memoria_libre);
    seq_printf(archivo, "\"mem_inuse\":\"%li%%\",\n", ((total_memoria - memoria_libre) * 100)/total_memoria) ;
    seq_printf(archivo, "\"mem_buffer\":%li,\n", memBuffer);
    seq_printf(archivo, "\"mem_cache\":%li\n", memCache);
    seq_printf(archivo, "}");
    return 0;
}

static int abrirArchivo(struct inode *inode, struct  file *file) {
  return single_open(file, escribir_archivo, NULL);
}

static struct file_operations operaciones =
{    
    .open = abrirArchivo,
    .read = seq_read
};

static int al_iniciar(void)
{
    proc_create("mem_201314631", 0, NULL, &operaciones);
    printk(KERN_INFO "HOLA MUNDO, SOMOS EL GRUPO 12 Y ESTE ES EL MONITOR DE MEMORIA \n");
    return 0;
}
 
static void al_salir(void)
{
    remove_proc_entry("mem_201314631", NULL);
    printk(KERN_INFO "         SAYONARA MUNDO, SOMOS EL GRUPO 12 Y ESTE FUE EL MONITOR DE MEMORIA    \n");
}
 
module_init(al_iniciar);
module_exit(al_salir); 
