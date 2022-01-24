console.log("connected!");

const createTaskHtml = (id, name, description, assignedTo, dueDate, status) =>
  `
    <div class="card" data-task-id=${id}>
      <div class="card-body">
        <table class="table table-borderless">
        <tbody>
          <tr>
            <td class="fw-bold">Task Name</td>
            <td id>${name}</td>
          </tr>
          <tr>
            <td class="fw-bold">Description</td>
            <td>${description}</td>
          </tr>
          <tr>
            <td class="fw-bold">Assigned To</td>
            <td >${assignedTo}</td>
          </tr>
          <tr>
            <td class="fw-bold">Due Date</td>
            <td>${dueDate}</td>
          </tr>
          <tr>
            <td class="fw-bold">Status</td>
            <td>${status}</td>
          </tr>
        </tbody>
        </table>
      </div>
      <div class="card-body button">
        <a href="#" class="btn btn-success done-button ${status === 'TO DO' ||  status === 'REVIEW' ? 'visible' : 'invisible'}" role="button" id="Done">Mark As Done</a>
        <a href="#" class="btn btn-danger delete-button" role="button" id="delete">Delete</a>
      </div>
    </div>
  `;

// Create TaskManager class
class TaskManager {
    constructor(currentId = 0) {
      this.tasks = [];
      this.currentId = currentId;
    }
    // Add addTask method
    addTask(name, description, assignedTo, dueDate, status) {
      const task = {
        id: this.currentId++,
        name,
        description,
        assignedTo,
        dueDate,
        status
      };
      this.tasks.push(task);
      console.log(this.tasks);
    }

      // Create the deleteTask method
      deleteTask(taskId) {
        // Create an empty array and store it in a new variable, newTasks
        const newTasks = [];

        // Loop over the tasks
        for (let i = 0; i < this.tasks.length; i++) {
            // Get the current task in the loop
            const task = this.tasks[i];

            // Check if the task id is not the task id passed in as a parameter
            if (task.id !== taskId) {
                // Push the task to the newTasks array
                newTasks.push(task);
            }
        }

        // Set this.tasks to newTasks
        this.tasks = newTasks;
    }


      getTaskById(taskId) {
          let foundTask;

          for (let i = 0; i < this.tasks.length; i++) {
              const task = this.tasks[i];

              if (task.id === taskId) {
                  foundTask = task;
              }
          }

          return foundTask;
      }

    // Add render method
    render() {
      const tasksHtmlList = [];

      for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
        
        const date = new Date(task.dueDate);
        const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

        const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);

        tasksHtmlList.push(taskHtml);
    }

    const tasksHtml = tasksHtmlList.join('\n');

    const taskCard = document.querySelector('#taskCard');
    taskCard.innerHTML = tasksHtml;
}

save() {
    const tasksJson = JSON.stringify(this.tasks);

    localStorage.setItem('tasks', tasksJson);

    const currentId = String(this.currentId);

    localStorage.setItem('currentId', currentId);
}

load() {
    if (localStorage.getItem('tasks')) {
        const tasksJson = localStorage.getItem('tasks');

        this.tasks = JSON.parse(tasksJson);
    }

    if (localStorage.getItem('currentId')) {
        const currentId = localStorage.getItem('currentId');

        this.currentId = Number(currentId);
    }
  }
};

module.exports = {
  TaskManager: TaskManager
}
