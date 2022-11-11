import styles from './Header.module.scss'

import rocketImg from './assets/rocket.svg'

export function Header() {
  return (
    <header className={styles.header}>
        <img src={rocketImg} />
        <span className={styles.titleIntro}>to</span>do
    </header>
  )
}
