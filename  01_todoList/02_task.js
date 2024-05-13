const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('pressed');
    var x = document.getElementById("taskInput").value;
    if (x) {
        addTask(x);
        console.log('calling function');
    } else {
        alert('Enter a valid value');
    }
    saveData();
});

const uList = document.querySelector('#taskList');

function addTask(y) {
    let listItem = document.createElement('li'); // Create a <li> element
    let spanItem = document.createElement('span'); // Create a <span> element to hold the task description
    let checkbox = document.createElement('input'); // Create an <input> element for the checkbox
    checkbox.setAttribute("type", "checkbox"); // Set the type attribute to "checkbox"
    
    spanItem.textContent = y; // Set text content of the span to the task description before appending
    const delButton = document.createElement('button')
        delButton.className = 'delButton'
        delButton.innerHTML = 'X'
        delButton.addEventListener('click',()=>{
        listItem.remove()
        saveData()
})
    listItem.appendChild(checkbox); // Append the checkbox to the list item
    listItem.appendChild(spanItem);
    listItem.appendChild(delButton)
    uList.appendChild(listItem); // Append the list item to the task list
    document.getElementById("taskInput").value = ''; // Empty the input value after adding the task
    saveData()
}

function saveData() {
    const taskList = document.querySelectorAll('#taskList li'); // Get all task items
    const tasks = []; // Initialize an array to store task data
    taskList.forEach(task => {
        tasks.push(task.innerHTML); // Push HTML content of each task item to the array
    });
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save task data to local storage
}





