var TodoList = (function () {
    function TodoList(task, status) {
        this.task = task;
        this.status = status;
    }
    TodoList.prototype.add = function (list) {
        this.task.push(list.task);
        this.status.push(list.status);
    };
    TodoList.prototype.edit = function (task, value) {
        for (var i = 0; i < this.task.length; i++) {
            if (task == this.task[i]) {
                this.task[i] = value;
                this.status[i] = "Updated";
            }
        }
    };
    TodoList.prototype.complete = function (task) {
        for (var i = 0; i < this.task.length; i++) {
            if (task == this.task[i]) {
                this.status[i] = "Completed";
            }
        }
    };
    TodoList.prototype.del = function (new_task) {
        for (var i = 0; i < this.task.length; i++) {
            if (new_task == this.task[i]) {
                this.status[i] = "Deleted";
            }
        }
    };
    TodoList.prototype.display = function () {
        console.log("task" + this.task + "status" + this.status);
    };
    return TodoList;
})();

var list = new TodoList(["new task"], ["active"]);

function addTask(task) {
    list.add({
        task: task,
        status: "active"
    });
}
function displayItem() {
    list.display();
}
function deleteTask(task) {
    list.del(task);
}
function completeTask(task) {
    list.complete(task);
}
function editTask(task, value) {
    list.edit(task, value);
}
