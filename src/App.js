// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Contact from "./pages/contact/Contact";
import NoPage from "./pages/NoPage";
import ChatApp from "./pages/Chat/ChatApp";
import Login from "./pages/auth/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="chatApp" element={<ChatApp />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
