import { Avatar } from './Avatar';
import { Comment } from './Comment';
import {format, formatDistanceToNow} from 'date-fns'
import ptbr from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'; 

export function Post(props){
  const content = props.content
  // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
  //   day:'2-digit',
  //   month:'long',
  //   hour:'2-digit',
  //   minute:'2-digit',
  // }).format(props.publishedAt)

  const publishedDateFormattedDATE = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
    locale:ptbr
  })

  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale:ptbr,
    addSuffix:true
  })

  
  // props.publishedAt
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl}/>
          <div className={styles.authorinfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormattedDATE} dateTime={props.publishedAt.toISOString()}>{
           publishedDateRelativeToNow
         
}</time>
      </header>

      <div className={styles.content}>

        {
          content.map(line => {
            if(line.type==='paragraph'){
              return <p>{line.content}</p>
            }else{
              return <p><a href="#">{line.content}</a></p>
            }
          })
        }
       
        
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentario'/>
       <footer>
       <button type="submit">Publicar</button>
       </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}