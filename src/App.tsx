import { useState } from 'react';
import styles from './App.module.scss'

import { v4 as uuidv4 } from 'uuid';

import { Header } from './Header'
import { Input } from './Input'
import { Tasks } from './Tasks'

export interface ITask {
  id: string;
  checked: boolean;
  description: string;
}

export function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  function handleAddTask(description: string){
    const newTask = {
      id: uuidv4(),
      checked: false,
      description
    }

    setTaskList((oldState) => [...oldState,newTask ] )
  }

  function handleCheckTask(id: string){
    const newTaskList = taskList.map((task) => {
        if(task.id === id){
          task.checked = true;
        }

        return task;
    })

    setTaskList(newTaskList);
  }

  function handleRemoveTask(id: string){
    const newTaskList = taskList.filter((task) => task.id !== id);

    setTaskList(newTaskList);
  }

  return (
    <>
      <Header />
      
      <main className={styles.container}>
        <Input addTask={handleAddTask} />
        <Tasks taskList={taskList} checkTask={handleCheckTask} removeTask={handleRemoveTask} />
      </main>
    </>
  )
}