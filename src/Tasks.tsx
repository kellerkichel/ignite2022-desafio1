import styles from './Tasks.module.scss'

import { EmtpyTaskList } from './EmtpyTaskList';
import { ITask } from './App';

import checkOffIcon from './assets/check_off.svg';
import checkOnIcon from './assets/check_on.svg';
import trashIcon from './assets/trash.svg';


interface TasksProps {
  taskList: ITask[];
  checkTask: (id: string) => void;
  removeTask: (id: string) => void;
}

export function Tasks({taskList, checkTask,removeTask}:TasksProps) {
  const tasksChecked = taskList.reduce((acc, task) => {
    return acc + (task.checked ? 1 : 0);
  }, 0);

  function handleCheckClick({checked, id}:ITask){
    if(!checked){
      checkTask(id);
    }
  }

  function handleRemoveClick({id}:ITask){
    removeTask(id);
  }

  return (
    <section className={styles.tasks}>
      <header className={styles.info}>
          <h3>Tarefas criadas <span>{taskList.length}</span></h3>
          <h3>Concluídas <span>{taskList.length > 0 ? `${tasksChecked} de ` : ''}{taskList.length}</span></h3>
        </header>

        <ul className={styles.list}>
          <>
            {taskList.map(task => (
              <li key={task.id}>
                <button onClick={() => handleCheckClick(task)}>
                    {
                      task.checked ?
                      <img src={checkOnIcon} /> :
                      <img src={checkOffIcon} />
                    }
                </button>
                <p>{task.description}</p> 
                <button onClick={() => handleRemoveClick(task)}>
                    <img src={trashIcon} />
                </button>
              </li>
            ))}

            {taskList.length === 0 && <EmtpyTaskList />}
          </>
        </ul>
    </section>
  )
}
