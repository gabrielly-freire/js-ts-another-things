import { format, formatDistanceToNow } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState } from "react";

export function Post({author, publishedAt, content}) {
    const [comments, setComments] = useState([
        "Comentário legal!!"
    ]);

    const [newCommentText, setNewCommentText] = new useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    function handleCreateNewComment(){
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete){
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeleteOne)
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Obrigatoriooo')
    }

    const isNewCommentEmpty = newCommentText.length == 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src="https://avatars.githubusercontent.com/u/103790368?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
            if (line.type === 'paragraph'){
                return <p key={line.content}>{line.content}</p>;
            } else if (line.type === 'link'){
                return <p key={line.content}><a href="#">{line.content}</a></p>;
            }
        })}
      </div>
      <form  onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
            return <Comment key={comment} 
                            content={comment} 
                            onDeleteComment={deleteComment}/>
        })}
      </div>
    </article>
  );
}