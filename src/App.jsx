import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NavBar from "./components/Navbar";
import FeedPage from "./pages/FeedPage";

function App() {

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/feed" Component={FeedPage} />
      </Routes>
    </>
  );
}

export default App;
