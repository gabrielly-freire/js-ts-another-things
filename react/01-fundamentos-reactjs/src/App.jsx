import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Gabrielly Freire" content="This is my first post!" />
          <Post author="Gabrielly Freire" content="This is my second post!" />
          <Post author="Gabrielly Freire" content="This is my third post!" />
        </main>
      </div>
    </div>
  );
}
