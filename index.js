let tasks= [];
const form= document.getElementById("task-form");
const task_input= document.getElementById("task-title");
const task_priority= document.getElementById("task-priority");
const task_category= document.getElementById("task-category");
const task_list= document.getElementById("task-list");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const title= task_input.value.trim();
    const priority= task_priority.value;
    const category= task_category.value;

    if(title===""){
        alert("task cannot be empty.")
        return;
    }
    const task= {
        time: new Date(),
        title,
        priority,
        category
    }
    tasks.push(task);
    renderTask(task);
    form.reset();
});
function renderTask(task){
    const li= document.createElement("li");
    const dd= task.time.getDate();
    const mm= task.time.getMonth() + 1;
    const yy= task.time.getFullYear();
    const date= dd +'/' + mm + '/' + yy;
    li.className= "task-item";
    li.innerHTML=`<div class="title_and_marker"><input type="checkbox" /> <span class="task-title">${task.title}</span></div>
     <div class="task_info">
     <span class="task-date task_sub_info">${date}</span> 
     <span class="task-category task_sub_info">${task.category}</span> 
     <span class="task-priority task_sub_info ${task.priority.toLowerCase()}"> ${task.priority} </span> 
     <button class="edit-btn task_sub_info">✏</button> <button class="delete-btn">🗑</button>
     </div>`;
     task_list.appendChild(li);
}
