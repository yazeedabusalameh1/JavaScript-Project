let input=document.querySelector(".input");
let submet=document.querySelector(".add");
let taskDiv=document.querySelector(".tasks");

//array to store tasks
let arrayOfTasks=[]
// check if there task from local storge
if(localStorage.getItem("task")){
    arrayOfTasks=JSON.parse(localStorage.getItem("task"));
}
//Trigger get data from local storge
getDataFromLocalStorge();
//add task
submet.onclick=function(){
    if(input.value !==""){
        addTaskToArray(input.value);
        input.value="";
        console.log("true");
    }
};
// click on Task Elemant 
taskDiv.addEventListener("click",(e)=>{
    //delete button 
    if(e.target.classList.contains("del")){
        //Remove task from local storge
        deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
        //remove elemant from page
        e.target.parentElement.remove();
        
    }
    //deleta all
    if(e.target.classList.contains("delAll")){
        //Remove all tasks from local storge
        window.localStorage.removeItem("tasks")
        //remove all elemants from page
        taskDiv.innerHTML="";
        
    }
    //task Elemant
    if(e.target.classList.contains("task")){
        //toggel completed task
        toggleStatusTaskWith(e.target.getAttribute("data-id"));
        //toggle done class
        e.target.classList.toggle("done");
    }
});

function addTaskToArray(taskText){
    //task data
    const task={
        id: Date.now(),
        titel:taskText,
        completed:false,
    };
    //push task to array
    arrayOfTasks.push(task);
    //add task to page
    addElemantsToPageForm(arrayOfTasks);
    //add task to local storge
    addDataToLocalStorgeFrom(arrayOfTasks);
};

function addElemantsToPageForm(arrayOfTasks)
{
    //empty task div
    taskDiv.innerHTML="";
    //looping on array of tasks
    arrayOfTasks.forEach((task)=>{
        //create main div
        let div=document.createElement("div");
        div.className="task";
        //cheack if task is done
        if(task.completed){
            div.className="task done";
        }
        div.setAttribute("data-id",task.id);
        div.appendChild(document.createTextNode(task.titel));
        //create Delete Button
        let span=document.createElement("span");
        span.className="del"
        span.appendChild(document.createTextNode("Delete"));
        div.appendChild(span);
        //add task div to task container 
        taskDiv.appendChild(div);
       
    })
    // create delet button
    let deletAll=document.createElement("span");
    deletAll.className="delAll";
    deletAll.appendChild(document.createTextNode("DeletAll"));
taskDiv.appendChild(deletAll);
};
function addDataToLocalStorgeFrom(){
    window.localStorage.setItem("tasks",JSON.stringify(arrayOfTasks));
}
function getDataFromLocalStorge(){
    let data=window.localStorage.getItem("tasks");
    if(data){
        let tasks=JSON.parse(data);
        addElemantsToPageForm(tasks);
    }
}
function deleteTaskWith(taskId){
    arrayOfTasks=arrayOfTasks.filter((task)=>task.id !=taskId)
    addDataToLocalStorgeFrom(arrayOfTasks);
}
function toggleStatusTaskWith(taskId){
    for(let i=0;i<arrayOfTasks.length;i++){
        if(arrayOfTasks[i].id==taskId){
            arrayOfTasks[i].completed==false?(arrayOfTasks[i].completed=true):(arrayOfTasks[i].completed=false);

        }
    }
    addDataToLocalStorgeFrom(arrayOfTasks);
}

