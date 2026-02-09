let tasks= [];
const form= document.getElementById("task-form");
const task_input= document.getElementById("task-title");
const task_date= document.getElementById("task-date");
const task_priority= document.getElementById("task-priority");
const task_category= document.getElementById("task-category");
const task_list= document.getElementById("task-list");
form.addEventListener("submit", function(e){
    e.preventDefault();
    const title= task_input.value.trim();
    const dueDate= task_date.value;
    const priority= task_priority.value;
    const category= task_category.value;

    if(title===""){
        alert("task cannot be empty.")
        return;
    }
    const task= {
        id: Date.now().toString(),
        title,
        dueDate,
        priority,
        category
    }
    tasks.push(task);
    renderTask(task);
    form.reset();
});
function renderTask(task){
    const li= document.createElement("li");
    li.className= "task-item";
    li.innerHTML=`<input type="checkbox" /> <span class="task-title">${task.title}</span>
     <span class="task-category">${task.category}</span> 
     <span class="task-priority ${task.priority.toLowerCase()}"> ${task.priority} </span> 
     <button class="edit-btn">✏</button> <button class="delete-btn">🗑</button>`;
     task_list.appendChild(li);
}
