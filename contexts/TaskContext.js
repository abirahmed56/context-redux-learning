import { createContext, useContext, useReducer } from 'react';
import { tasksReducer } from "@/reducers/tasksReducer";

const TasksContext = createContext(null);

const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}


const initialTasks = [
  { id: 0, text: 'Do homework', done: true },
  { id: 1, text: 'Go to School', done: false },
  { id: 2, text: 'Go to market', done: false }
];