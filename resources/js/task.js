
const newTask = new TaskManager;
newTask.load();
newTask.render();

const taskCard = document.querySelector('#taskCard');

taskCard.addEventListener('click', (event) => {
    if (event.target.classList.contains('done-button')) {
        const parentTask = event.target.parentElement.parentElement;

        const taskId = Number(parentTask.dataset.taskId);

        const task = newTask.getTaskById(taskId);

        task.status = 'DONE';

        newTask.save();

        newTask.render();
    }

    // Check if a "Delete" button was clicked
    if (event.target.classList.contains('delete-button')) {
        // Get the parent Task
        const parentTask = event.target.parentElement.parentElement;
        // Get the taskId of the parent Task.
        const taskId = Number(parentTask.dataset.taskId);

        const task = newTask.getTaskById(taskId);

        if (task.status === 'DONE'){
        // Delete the task
        newTask.deleteTask(taskId);
    }}
        // Save the tasks to localStorage
        newTask.save();

        // Render the tasks
        newTask.render();
    
});
