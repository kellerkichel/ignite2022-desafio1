import styles from './EmtpyTaskList.module.scss'

import clipboardImg from './assets/clipboard.png';

export function EmtpyTaskList() {
  return (
    <div className={styles.empty}>
      <img src={clipboardImg} />
      
      <strong>Você ainda não tem tarefas cadastradas</strong>
      Crie tarefas e organize seus itens a fazer
    </div>
  )
}