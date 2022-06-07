import styles from './Post.module.css'; 

export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/12089780?v=4" alt="" />
          <div className={styles.authorinfo}>
            <strong>Anderson B. Silva</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de maio as 18:13" dateTime="2022-06-07 08:00:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>
          Fala galeraa 👋</p>

          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, 
          evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

          <p>👉 <a href="#">jane.design/doctorcare</a></p>

          <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
        
      </div>
    </article>
  )
}