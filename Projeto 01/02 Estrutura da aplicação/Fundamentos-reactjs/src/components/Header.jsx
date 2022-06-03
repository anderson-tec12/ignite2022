import styles from './Header.module.css';
import Ignitelogo from '../assets/ignite-logo.svg'

export function Header(){
  return (
   <header className={styles.header}>
     
      <img src={Ignitelogo} alt="Logo marca do ignite" />
   </header>
  )
}