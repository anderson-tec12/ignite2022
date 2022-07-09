import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { format, formatDistanceToNow } from "date-fns";
import ptbr from "date-fns/locale/pt-BR";
import styles from "./Post.module.css";
import { useState, useId, FormEvent, ChangeEvent, InvalidEvent } from "react";

type Author = {
  avatarUrl: string;
  name: string;
  role: string;
};

type Content = {
  type: "link" | "paragraph";
  content: string;
};

interface IPROPS {
  author: Author;
  content: Content[];
  publishedAt: Date;
}

export function Post(props: IPROPS) {
  const [comments, setComments] = useState(["Post muito bacana!!"]);
  const [newComment, setNewComment] = useState("");
  const content = props.content;
  // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
  //   day:'2-digit',
  //   month:'long',
  //   hour:'2-digit',
  //   minute:'2-digit',
  // }).format(props.publishedAt)

  const publishedDateFormattedDATE = format(
    props.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptbr,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
    locale: ptbr,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    // console.log(event.target.comment)
    // const textArea = event.target.comment
    // setComments(oldState => [...oldState, textArea.value])

    // event.target.comment.value = ''

    setComments((oldState) => [...oldState, newComment]);
    setNewComment("");
  }

  function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity("");
    setNewComment(e.target.value);
  }

  function deleteComment(comment: string) {
    setComments((oldState) => oldState.filter((c) => c !== comment));
  }

  function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
    console.log(e);
    e.target.setCustomValidity("Esse campo é obrigatório");
  }

  // props.publishedAt
  const isNewCommentEmpty = newComment.length > 0 ? false : true;
  return (
    <article className={styles.post} data-a={useId()}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={false} src={props.author.avatarUrl} alt="" />
          <div className={styles.authorinfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormattedDATE}
          dateTime={props.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={useId()}>{line.content}</p>;
          } else {
            return (
              <p key={useId()}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          onInvalid={handleNewCommentInvalid}
          required
          value={newComment}
          name="comment"
          placeholder="Deixe um comentario"
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment content={comment} onDeleteComment={deleteComment} />
        ))}
      </div>
    </article>
  );
}
