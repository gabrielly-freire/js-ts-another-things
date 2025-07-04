import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from 'date-fns/locale/pt-BR';

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState, type ChangeEvent, type FormEvent, type InvalidEvent } from "react";

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}
export function Post({ post }: PostProps) {
    const [comments, setComments] = useState([
        "Comentário legal!!"
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Obrigatoriooo')
    }

    function deleteComment(commentToDelete: string){
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeleteOne)
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
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map(line => {
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