import { useState } from 'react';
import { useTasksDispatch } from '@/contexts/TaskContext.js';
import { Button, Input } from 'antd';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  return (
    <>
      <Input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
        required
      />
      <Button onClick={() => {
        setText('');
        dispatch({
          type: 'added',
          id: nextId++,
          text: text,
        }); 
      }}>Add</Button>
    </>
  );
}

let nextId = 3;