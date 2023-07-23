import React,{Suspense} from "react";
import Header from "./components/Header";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./Pages/HomePage";
import WhiteListPage from "./Pages/WhiteListPage";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <BrowserRouter>
    <Header/>
    {/* <Routes>
      <Route path="/" element={<HomePage/>} />
    </Routes> */}
    <Routes>
      <Route path="/" element={<WhiteListPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
