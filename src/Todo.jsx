export default function ToDo({ task, isDone }) {
    // console.log(typeof isDone)
  if (isDone) {
    return (
      <div>
        <li>Task: {task}</li>
        <li>process: Done</li>
      </div>
    );
  }
  return (
      <div>
        <li>Task: {task}</li>
        <li>process: Do it now!</li>
      </div>
    );
}
