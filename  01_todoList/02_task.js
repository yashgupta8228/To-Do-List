const button = document.querySelector('button')
button.addEventListener('click',()=>{
    console.log('pressed');
    var x = document.getElementById("taskInput").value;
    if(x){
        addTask(x)
    }
    else{
        alert('enter a value')
    }
   
})

// var x = document.getElementById('taskInput')
const uList = document.querySelector('#taskList')
function addTask(y) {
    let List = document.createElement('li')
    uList.appendChild(List)
   document.querySelector("li").innerHTML = y; 
}
