import AddTask from '../components/AddTask.js';
import TaskList from '../components/TaskList.js';
import { TasksProvider } from '../contexts/TaskContext.js';


export default function taskPage() {
  return (
    <TasksProvider>
      <h1>TO DO:</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}