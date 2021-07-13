import "./App.css";
import PostList from "./components/PostList";
import { StoreProvider } from "./components/store";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <div>
      <StoreProvider>
        <div className="flex">
          <div className="box">
            <PostList />
          </div>
          <div className="box">
            <PostDetail />
          </div>
        </div>
      </StoreProvider>
    </div>
  );
}

export default App;
