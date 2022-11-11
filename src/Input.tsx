import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './Input.module.scss'

import plusIcon from './assets/plus.svg';

interface InputProps {
  addTask: (value: string) => void
}

export function Input({addTask}:InputProps) {
  const [task, setTask] = useState('');

  function handleChangeTask(event: ChangeEvent<HTMLInputElement>){
    setTask(event.target.value);

    // reseta error
    event.target.setCustomValidity('');
  }

  function handleErrorSubmit(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Campo obrigatório.');
  }

  function handleFormSubmit(event: FormEvent){
    event.preventDefault();
    
    addTask(task);

    setTask('');
  }

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
        <input type="text" placeholder='Adicione uma nova tarefa' value={task} onChange={handleChangeTask} required onInvalid={handleErrorSubmit} />
        <button type="submit">Criar <img src={plusIcon} /></button>
    </form>
  )
}
