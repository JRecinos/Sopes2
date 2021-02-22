#include <linux/fs.h>
#include <linux/init.h>
#include <linux/kernel.h>
#include <linux/list.h>
#include <linux/module.h>
#include <linux/proc_fs.h>
#include <linux/sched.h>
#include <linux/seq_file.h>
#include <linux/slab.h>
#include <linux/string.h>
#include <linux/types.h>
#include <linux/mm.h>


void readProcess2(struct seq_file *m, struct task_struct *s, int p_pid)
{
	 char estado[50];

    switch(s->state){
	case TASK_RUNNING:
	    strcpy(estado,"Ejecucion");
	    break;

	case TASK_STOPPED:
 	    strcpy(estado,"Detenido");
	    break;

	case TASK_INTERRUPTIBLE:
 	    strcpy(estado,"Interrumpible");
	    break;

	case TASK_UNINTERRUPTIBLE:
 	    strcpy(estado,"Ininterrumpible");
	    break;

	case EXIT_ZOMBIE:
 	    strcpy(estado,"Zombi");
	    break;

	default:
	    strcpy(estado, "Desconocido");
    }
	long l = get_mm_rss(s->mm);
	seq_printf(m,"{ \n\"pid\": %d,\t\t\n\"nombre\": \"%s\",\t\t\n\"estado\":\"%s\",\t\t \n\"memoria\":%ld,\t\t \n\"usuario\":%d,\n\"p_pid\": %d\n },",s->pid, s->comm, estado, l, __kuid_val(s->real_cred->uid),p_pid);

}

void readProcess(struct seq_file *m, struct task_struct *s)
{
    struct list_head *list;
    struct task_struct *task;
 	char estado[50];

    switch(s->state){
        case TASK_RUNNING:
	    strcpy(estado,"Ejecucion");
	    break;

	case TASK_STOPPED:
 	    strcpy(estado,"Detenido");
	    break;

	case TASK_INTERRUPTIBLE:
 	    strcpy(estado,"Interrumpible");
	    break;

	case TASK_UNINTERRUPTIBLE:
 	    strcpy(estado,"Ininterrumpible");
	    break;

	case EXIT_ZOMBIE:
 	    strcpy(estado,"Zombi");
	    break;

	default:
	    strcpy(estado, "Desconocido");
    }

	seq_printf(m,"{\n");
	long l = get_mm_rss(s->mm);
    seq_printf(m,"\"pid\": %d,\t\t\n\"nombre\": \"%s\",\t\t\n\"estado\":\"%s\",\t\t \n\"memoria\":%ld,\t\t \n\"usuario\":%d\n},",s->pid, s->comm, estado, l, __kuid_val(s->real_cred->uid));
    //seq_printf(m,",\n\"children\":[\n");
	list_for_each(list, &s->children) {
        task = list_entry(list, struct task_struct, sibling);
        readProcess2(m, task, s->pid);
    }
	//seq_printf(m,"]\n");
	//seq_printf(m,"}\n");
}

static int pstree(struct seq_file *m, void *v)
{
    struct task_struct *parent = current; 
    /*
	int ejecutando = 0;
	int detenido = 0;
	int zombie = 0;
	int suspendido = 0;
	int total = 0;
	seq_printf(m,"{\n");

    while (parent->pid != 1){
    	parent = parent->parent; 
    	ejecutando = processRun(parent->parent);
		detenido = processStop(parent->parent);
		suspendido = processSuspendido(parent->parent);
		zombie = processZombie(parent->parent);
	}

	total = ejecutando+detenido+suspendido+zombie;
	seq_printf(m,"]\n");
	seq_printf(m,"total_process:%d\n",total);
	seq_printf(m,"process_run:%d\n",ejecutando);
	seq_printf(m,"process_stop:%d\n",detenido);
	seq_printf(m,"process_suspended:%d\n",suspendido);
	seq_printf(m,"process_zombie:%d\n",zombie);
	*/
	while (parent->pid != 1){
    	parent = parent->parent; 
    	readProcess(m, parent);
	}
	return 0;
}

static int meminfo_proc_open(struct inode *inode, struct file *file)
{
    return single_open(file, pstree, NULL);
}

static const struct file_operations meminfo_proc_fops = {
    .open       = meminfo_proc_open,
    .read       = seq_read,
    .llseek     = seq_lseek,
    .release    = single_release,
};

MODULE_LICENSE("GPL");
MODULE_AUTHOR("Jorge Mario Recinos Dieguez");
MODULE_DESCRIPTION("Modulo de CPU - Sistemas Operativos 1");

static int __init cpu_201314631_init(void)
{
	proc_create("cpu_201314631", 0, NULL, &meminfo_proc_fops);
	printk(KERN_INFO "    Jorge Mario Recinos Dieguez\n");
	return 0;
}

static void __exit cpu_201314631_cleanup(void)
{
	remove_proc_entry("cpu_201314631", NULL);
	printk(KERN_INFO "      Diciembre 2020    \n");
}

module_init(cpu_201314631_init);
module_exit(cpu_201314631_cleanup);
