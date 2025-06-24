import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover}
        src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className={styles.profile}>
        <Avatar
          src="https://avatars.githubusercontent.com/u/103790368?v=4"
        />
        <strong>Gabrielly Freire</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edit your profile</a>
      </footer>
    </aside>
  );
}