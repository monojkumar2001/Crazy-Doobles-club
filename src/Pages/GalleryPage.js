import React, { useState } from "react";
import "./Gallery.css";
import GallerySidebar from "../components/Gallery/GallerySidebar";
import ImageCard from "../components/Gallery/ImageCard";
const GalleryPage = () => {
  const [filterActive, setFilterActive]=useState([false]);
  const toggleFilter= ()=>{
    setFilterActive(!filterActive)
  }
  return (
    <>
      <div className="gallery">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className="gallery-sidebar" >
                <div className={`${filterActive ? "" : "active"} sidebar-filter`}>
                <div className="filter-close-menu" onClick={toggleFilter}>
                <img src="./images/close.svg" alt="" />
                </div>
                <GallerySidebar />
                </div>

              </div>
            </div>
            <div className="col-lg-9 col-md-12 ">
            <div className={`${filterActive ? "" : "active"} overlays`}></div>
              <div className="gallery-wrapper">
        
                <div className="gallery-header-item d-flex align-items-center justify-content-between">
                  <div className="gallery-con-btn d-flex align-items-center gap-3">
                    <button>ALl</button>
                    <button>MY COLLECTION</button>
                  </div>
                  <div className="gallery-count d-flex align-items-center gap-3">
                    <span>12450</span>
                    <button className="gallery-refresh-btn">
                      <img src="/images/refresh.svg" alt="" />
                    </button>
                    <button className="filter-menu-icon" onClick={toggleFilter}>
                      <img src="/images/filter-menu.svg" alt="" />
                    </button>
                  </div>
                </div>
                <div className="gallery-card-items">
                  <ImageCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
