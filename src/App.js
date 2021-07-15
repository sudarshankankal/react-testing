import "./App.css";
import PostList from "./components/PostList";
import { StoreProvider } from "./components/store";
import PostDetail from "./components/PostDetail";
import FetchData from "./components/FetchData";

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
      <FetchData/>
    </div>
  );
}

export default App;
