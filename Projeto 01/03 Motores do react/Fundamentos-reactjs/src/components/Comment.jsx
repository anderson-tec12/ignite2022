import {useState} from 'react'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({content,onDeleteComment} = props){
  const [likeCount, setLikeCount] = useState(0)
  
  function handleDeleteComment(comment){
    onDeleteComment(comment)
  }

  function handleLikeComment(){
    setLikeCount(oldState => oldState+ 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/12089780?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Anderson B. Silva</strong>
              <time title="11 de maio as 18:13" dateTime="2022-06-07 08:00:00">Publicado há 1h</time>
            </div>

            <button title="Deletar comentario" onClick={() => handleDeleteComment(content)}>
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
              <ThumbsUp size={20} /> Apluadir <span>{likeCount}</span>
            </button>
        </footer>
      </div>
    </div>
  )
}