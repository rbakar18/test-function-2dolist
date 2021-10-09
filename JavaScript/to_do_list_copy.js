document.addEventListener('DOMContentLoaded', function(){

  let taskInfo = [];

  document.querySelector("#new_task").onsubmit = function(){

    const li = document.createElement('li');

    let task_text = document.querySelector('#task_name').value;
    let task_priority = document.querySelector('#priority_selector').value;
    let task_status;
    let task_status_input = document.querySelectorAll('[class=status]');

    taskInfo.forEach(check);

    function check(value, index, array){
      task_status = task_status_input.value;
    }


  /*  for (var i = 0; i < task_status_input.length; i++){
      if(task_status_input[i].checked){
        task_status = task_status_input[i].value;
      }
    } */

    let new_task_html = `
                        <div>
                        <span> ${task_text} </span> <br>
                        <span> Priority Level: ${task_priority} </span> <br>
                        <span> Task Status: ${task_status}
                        </div>

                        <button class="task-completed"> Completed </button>
                        <button class="remove"> Remove Task </button>
                        `;

      li.innerHTML = new_task_html

        document.querySelector("#task_list").append(li);
        document.querySelector("#task_name").value = '';
        return false;
  }
    document.addEventListener('click', function(event){
      element = event.target;
      if(element.className === 'remove') {
        element.parentElement.remove();
        element.parentElement.innerHTML = "Task removed."
      }
      if (element.className ==='completed'|| element.className === 'task-completed'){
        element.parentElement.style.setProperty("text-decoration", "line-through");
        element.parentElement.style.color = "white";
        element.task_status = "completed";
      }


    })


});
