import React from "react";
import Header from "./components/Header";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./Pages/HomePage";
import WhiteListPage from "./Pages/WhiteListPage";
import WhiteListPage2 from "./Pages/WhiteListPage2";
import MintPage from "./Pages/MintPage";
import GalleryPage from "./Pages/GalleryPage";
import LoginRegisterPage from "./Pages/LoginRegisterPage";
import UserListPage from "./Pages/UserListPage";
function App() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="app-con">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/whitelist" element={< WhiteListPage/>} />
      <Route path="/mint" element={<MintPage/>} />
      <Route path="/whitelist-2" element={<WhiteListPage2/>} />
      <Route path="/gallery" element={<GalleryPage/>} />
      <Route path="/login" element={<LoginRegisterPage/>} />
      <Route path="/userlist" element={<UserListPage/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
