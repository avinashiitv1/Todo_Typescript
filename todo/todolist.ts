interface  ITodoList{
    task: string;
    status: string;
}
class TodoList{
    task: string[];
    status: string[];
    constructor(task: string[],status: string[]){
        this.task=task;
        this.status=status;
    }
    add(list : ITodoList){
        this.task.push(list.task);
        this.status.push(list.status);
    }
    edit(task:string,value:string)
    {
        for(var i=0;i<this.task.length;i++){
            if(task==this.task[i]){
                this.task[i]=value;
                this.status[i]="Updated";
            }
        }
    }
    complete(task:string)
    {
        for(var i=0;i<this.task.length;i++){
            if(task==this.task[i]){
                this.status[i]="Completed";
            }
        }

    }
    del( new_task: string)
    {
        for(var i=0;i<this.task.length;i++){
            if(new_task==this.task[i])
            {
                this.status[i]="Deleted";
            }
        }
    }
    display(){
        console.log("task" +this.task  + "status"+ this.status);
    }
}

var list =new TodoList(["new task"],["active"]);

function addTask( task: string)
{
    list.add(
        {
            task: task,
            status: "active",
        }
    );
}
function  displayItem() {
    list.display();
}
function deleteTask(task:string)
{
list.del(task);
}
function completeTask(task:string)
{
    list.complete(task);
}
function editTask(task:string, value: string)
{
    list.edit(task, value);
}


