import {PencilLine} from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from './Sidebar.module.css'

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} 
      width="100%"
      src="https://images.unsplash.com/photo-1540442872948-49b05bb760e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/12089780?v=4"/>
        
        <strong>Anderson B. Silva</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#"><PencilLine size={20}/> Editar seu perfil</a>
      </footer>
    </aside>
  )
}