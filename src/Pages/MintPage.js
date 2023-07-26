import React, { useState } from "react";
import ImageMarqueeCard from "../components/marquee/ImageMarqueeCard";
import TextMarqueeItem from "../components/marquee/TextMarqueeItem";
import { LazyLoadImage } from "react-lazy-load-image-component";
const MintPage = () => {
  return (
    <>
  <div className="mint-page">
  <div className="marque-section cpb-7">
        <ImageMarqueeCard/>
      </div>
      <div className="marque-text-section">
        <TextMarqueeItem/>
      </div>
      <div className="mint-wrapper">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="mint-content d-flex align-items-center justify-content-center flex-column text-center ">
                <h2>MINT <span> NOW</span></h2>
                <div className="mint-price-box">
                  <p>MINT PRICE</p>
                  <h4>0.056 ETH</h4>
                </div>
                <div className="mint-count-box w-100 d-flex align-items-center justify-content-between">
                  <div className="mint-count-item d-flex align-items-center">
                    <button className="mint-count-icon">
                    <img src="/images/maynes.svg" alt="" />
                    </button>
                    <span>1</span>
                    <button className="mint-count-icon">
                     
                      <img src="/images/plas.svg" alt="" />
                    </button>
                  </div>
                  <p>5 MAX</p>
                </div>
                <div className="mint-total-box w-100 d-flex align-items-center justify-content-between">
                 <h4>TOTAL</h4>
                  <p>0.065 ETH</p>
                </div>
                <button
                className="mint-btn"
                >MINT MY FELLAZ</button>
                <p className="amount-item">106/1,111 MINTED </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="mint-img">
                <LazyLoadImage
                src="/images/mint-img.svg"
                width='auto'
                height='auto'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
    </>
  );
};

export default MintPage;
