import "./App.css";
import PostList from "./components/PostList";
import { StoreProvider } from "./components/StoreProvider";
import PostDetail from "./components/PostDetail";
// import FetchData from "./components/FetchData";
import LandingPage from "./pages/LandingPage";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav/>
      <LandingPage/>
     
      {/* <StoreProvider>
        <div className="flex">
          <div className="box">
            <PostList />
          </div>
          <div className="box">
            <PostDetail />
          </div>
        </div>
      </StoreProvider> */}
    </div>
  );
}

export default App;
