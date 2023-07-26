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
function App() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes>
    <Routes>
      <Route path="/whitelist" element={< WhiteListPage/>} />
    </Routes>
    <Routes>
      <Route path="/mint" element={<MintPage/>} />
    </Routes>
    <Routes>
      <Route path="/whitelist-2" element={<WhiteListPage2/>} />
    </Routes>
    <Routes>
      <Route path="/gallery" element={<GalleryPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
