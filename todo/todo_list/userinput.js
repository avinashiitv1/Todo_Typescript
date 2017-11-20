window.onload = function() {
    function delete_func(task)
    {
        deleteTask(task);
        displayItem();
    }
    var input = document.getElementById('task');
    var btn = document.getElementById('btn');
    btn.onclick = function () {
        var value = input.value;
        addTask(value);
        displayItem();
        var todo = document.getElementById('todo');
        var row = document.createElement('tr');
        var column_value= document.createElement('td');
        column_value.innerHTML=value;
        var column_edit= document.createElement('td');
        var edit= document.createElement('button');
        edit.innerHTML="edit todo";
        edit.onclick= function()
        {

                var updateId=document.getElementById("editValue");
                updateId.style.visibility="visible";
                document.getElementById("update_button").onclick=function() {
                    var val = document.getElementById('text').value;
                    console.log(val);
                    editTask(value, val);
                    displayItem();
                    console.log(val);
                    column_value.innerHTML = val;
                    var updateId=document.getElementById("editValue");
                    updateId.style.visibility = "hidden";
                }

        }
        column_edit.appendChild(edit);
        var column_complete= document.createElement('td');
        var complete= document.createElement('button');
        complete.innerHTML='mark as complete';
        complete.onclick=function()
        {

                completeTask(value);
                displayItem();
                row.removeChild(column_complete);
                row.removeChild(column_edit);
                column_value.setAttribute("class","complete")


        }
        column_value.setAttribute("class","text");
        column_complete.appendChild(complete);
        var column_del= document.createElement('td');
        var del=document.createElement('button');
        del.onclick= function()
        {
            var con = confirm("do you want to delete");
            if(con) {
                deleteTask(value);
                displayItem();
                column_value.setAttribute("class", "delete text");
                row.removeChild(column_del);
                row.removeChild(column_complete);
                row.removeChild(column_edit);
            }

        }
        row.setAttribute("class","row table-stripped");
        del.innerHTML='delete todo';
        edit.setAttribute("class","button blue");
        del.setAttribute("class","button red");
        complete.setAttribute("class","button");
        column_del.appendChild(del);
        row.appendChild(column_value);
        row.appendChild(column_edit);
        row.appendChild(column_complete);
        row.appendChild(column_del);
        todo.appendChild(row);
        displayItem();
    };


}