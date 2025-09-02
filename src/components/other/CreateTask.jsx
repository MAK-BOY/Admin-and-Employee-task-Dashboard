import React from 'react';

const CreateTask = () => {
  const formhandle = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const taskObj = {
      taskTitle: data.task,
      taskDescription: data.description,
      TaskDate: data.date,
      category: data.category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    employees.forEach((emp) => {
      if (data.assigne.toLowerCase() === emp.name.toLowerCase()) {
        emp.tasks.push(taskObj);
        emp.taskStats.newTask += 1;
      }
    });
    localStorage.setItem("employees", JSON.stringify(employees));

    event.target.reset(); // form clear
  };

  return (
    <div className="admin">
      <div className="admin-task">
        <form onSubmit={formhandle} className="ff">
          <label htmlFor="task">Task-Title</label><br />
          <input type="text" placeholder="Make Ui design" name="task" /> <br /><br />

          <label htmlFor="date">Date</label><br />
          <input type="date" name="date" /> <br /><br />

          <label htmlFor="assignedTo">Assign to</label><br />
          <input type="text" placeholder="employee name" name="assigne" /> <br /><br />

          <label htmlFor="category">Category</label><br />
          <input type="text" placeholder="design, dev, etc" name="category" /> <br /><br />

          <label htmlFor="description" id="lbl">Description</label><br />
          <textarea name="description" rows={7} cols={30}></textarea> <br /><br />

          <button id="btn2" type="submit">Create Task</button>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
