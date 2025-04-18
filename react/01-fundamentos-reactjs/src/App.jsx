import { Header } from "./components/Header";
import { Post } from "./Post";
import "./styles.css";

export function App() {
  return (
    <div>
      <Header />
      <Post author="Gabrielly Freire" content="This is my first post!" />
      <Post author="Gabrielly Freire" content="This is my second post!" />
      <Post author="Gabrielly Freire" content="This is my third post!" />
    </div>
  );
}
