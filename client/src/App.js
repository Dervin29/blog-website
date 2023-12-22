import "./App.css";
import Layout from "./Layout";
import IndexPage from "./components/PAges/IndexPage";
import LoginPage from "./components/PAges/LoginPage";
import RegisterPage from "./components/PAges/RegisterPage";
import CreatePost from "./components/PAges/CreatePost";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./components/UserContext";
import PostPage from "./components/PAges/PostPage";
import EditPost from "./components/PAges/EditPost";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/edit/:id" element={<EditPost />} />
          </Route>
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App; 
    