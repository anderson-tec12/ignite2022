import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
export function Comment(){
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/12089780?v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Anderson B. Silva</strong>
              <time title="11 de maio as 18:13" dateTime="2022-06-07 08:00:00">Publicado há 1h</time>
            </div>

            <button title="Deletar comentario">
              <Trash size={20}/>
            </button>
          </header>

          <p>Muito bom, parabens!!</p>
        </div>

        <footer>
          <button >
              <ThumbsUp size={20} /> apluadir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  )
}