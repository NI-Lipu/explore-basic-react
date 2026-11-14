export default function ToDo({ task, isDone }) {
  return isDone ? (
    <div>
      <li>Task: {task}</li>
      <li>process: Done</li>
    </div>
  ) : (
    <div>
      <li>Task: {task}</li>
      <li>process: Do it now!</li>
    </div>
  );

  //   return (
  //     isDone && (
  //       <div>
  //         <li>Task: {task}</li>
  //         <li>process: Do it now!</li>
  //       </div>
  //     )
  //   );
}
