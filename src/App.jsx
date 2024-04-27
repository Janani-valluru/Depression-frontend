import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Test from "./components/Test";
import Home from "./components/home/Home";
import Login from "./components/Login";
import GetHelp from "./components/GetHelp.jsx";
import QuizPage from "./components/QuizPage";
import Results from "./components/Results";
import Signup from "./components/Signup";
import Blog from "./components/post/Blog.jsx";
import DetailedPost from "./components/post/detailedpost.jsx";
import CreatePost from "./components/post/createpost.jsx";
import Dashboard from "./components/Dashboard.jsx";
import BotpressChat from "./components/BotpressChat.jsx";

import { Toaster } from "react-hot-toast";
import NotFoundPage from "./components/404page";
import Recommendations from "./components/Recommendations.jsx";
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gethelp" element={<GetHelp />} />
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/taketest/:test" element={<QuizPage />} />
        <Route path="/results" element={<Results />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:postId" element={<DetailedPost />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
      <BotpressChat isHomePage={isHomePage} />
      <Footer />
      <Toaster />
    </>
  );
}
export default App;
