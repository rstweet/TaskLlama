console.log("connected!");

// const testTask = new TaskManager;
// console.log(testTask.tasks);


// task.addTask("final project", 'adasdafsfdsf', 'Nat5', '10-10-1010')
// console.log(task);

// const taskHtml = createTaskHtml('asd', 'asd', 'asd', 'asd', 'asd');
// console.log(taskHtml);

const newTask = new TaskManager(0);
newTask.load();
// newTask.render();

const newTaskForm = document.querySelector('#newTaskForm');

const nameInput = document.querySelector("#name");
const descriptionInput = document.querySelector("#description");
const assignedToInput = document.querySelector("#assignedTo");
const dueDateInput = document.querySelector("#dueDate");
const statusInput = document.querySelector("#status");
const errorMessage = document.querySelector("#alertMessage");

const name = nameInput.value;
const description = descriptionInput.value;
const assignedTo = assignedToInput.value;
const dueDate = dueDateInput.value;
const status = statusInput.value;

// Validate (In progress)
// function validFormFieldInput(data) {
//     const nameInput = document.querySelector("#name");
//     const descriptionInput = document.querySelector("#description");
//     const assignedToInput = document.querySelector("#assignedTo");
//     const dueDateInput = document.querySelector("#dueDate");
//     const statusInput = document.querySelector("#status");

//     const name = nameInput.value;
//     const description = descriptionInput.value;
//     const assignedTo = assignedToInput.value;
//     const dueDate = dueDateInput.value;
//     const status = statusInput.value;

//     console.log("name: " + name + " description: " + description + " assignedTo: " + assignedTo + " dueDate: " + dueDate + " status: " + status)

//     data = []

// if (name.length <= 4){
//     document.querySelector("#errorName").innerHTML = "Name must be longer than 4 characters";
//     document.querySelector("#errorName").style.display = "block";
// } else if (description.length <= 6) {
//     document.querySelector("#errorDescription").innerHTML = "Description must be longer than 6 characters";
//     document.querySelector("#errorDescription").style.display = "block";
// } else if (assignedTo.length <= 1) {
//     document.querySelector("#errorAssignedTo").innerHTML = "Invalid assignee name must be longer than 1 character";
//     document.querySelector("#errorAssignedTo").style.display = "block";
// } else {
//     document.querySelector("#success").style.display = "none";
// };

// Due Date input checks for data type by default, but we have to check for valid date. Date can't be from past or far future.

// if(dueDate == NaN) {
//     errorMessage.innerHTML = "Invalid due date input.";
//     errorMessage.style.display = "block";
// } else {
//     errorMessage.style.display = "none";
//     return true;
// }
// };

// Submit form
newTaskForm.addEventListener('submit', (event) => {

    // Prevent default submit
    event.preventDefault();

    // Get input values
    const name = nameInput.value;
    const description = descriptionInput.value;
    const assignedTo = assignedToInput.value;
    const dueDate = dueDateInput.value;
    const status = statusInput.value;
    
    //Validate inputs
    if (name.length <= 4) {
        document.querySelector("#errorName").style.display = "block";
        document.querySelector("#success").style.display = "none";
    } else {
        document.querySelector("#errorName").style.display = "none";
    };
    if (description.length <= 6) {
        document.querySelector("#errorDescription").style.display = "block";
        document.querySelector("#success").style.display = "none";
    } else {
        document.querySelector("#errorDescription").style.display = "none";
    };
    if (assignedTo.length <= 1) {
        document.querySelector("#errorAssignedTo").style.display = "block";
        document.querySelector("#success").style.display = "none";
    } else {
        document.querySelector("#errorAssignedTo").style.display = "none";
    };
    if ((name.length > 4) && (description.length > 6) && (assignedTo.length > 1)) {
        document.querySelector(".alert-danger").style.display = "none";
        document.querySelector("#success").style.display = "block";
        newTask.addTask(name, description, assignedTo, dueDate, status);
        newTask.save();
        // newTask.render();
        nameInput.value = '';
        descriptionInput.value = '';
        assignedToInput.value = '';
        dueDateInput.value = '';
        status.value = '';
    };
    });
