import "./App.css";
import PostList from "./components/PostList";
import { StoreProvider } from "./components/StoreProvider";
import PostDetail from "./components/PostDetail";
import FetchData from "./components/FetchData";
import { Login } from "./components/Login";

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
      <div className="flex">
      <Login/>
      </div>
    </div>
  );
}

export default App;
