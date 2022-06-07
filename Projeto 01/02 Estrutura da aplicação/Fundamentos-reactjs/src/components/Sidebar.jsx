import styles from './sidebar.modules.css'

export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="http://placeimg.com/640/480/transport" alt="" />

      <div className={styles.profile}>
        <strong>Anderson B. Silva</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">Editar seu perfil</a>
      </footer>
    </aside>
  )
}