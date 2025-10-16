// ○ Create a functional component called ToDoList.
// ○ Inside this component:
// ■ Define an array of static to-do list tasks (e.g., "Learn React",
// "Build a project", "Read documentation").
// ■ Hard code a To-Do list to display each task inside a bulleted list
// of your choice.

const ToDoList = () => {
  const tasks = ["Learn React", "Build a project", "Read documentation"];

  return (
    <div>
    <ul>
      {tasks.map((task) => (
        <li>{task}</li>
      ))}
    </ul>
    </div>
  );
};

export default ToDoList;
