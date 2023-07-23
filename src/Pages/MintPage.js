import React, { useState } from "react";




const Mint = () => {
  const [count, setCount]=useState(1);
const price=0.25;
const selectWallet = require('algorand-wallet-select');
  return (
    <>
      <section className="mint">
        <div className="container">
          <div className="mint-wrapper d-flex align-items-center justify-content-center flex-column">
            <div className="mint-header-content">
              <h1 className="section-title">MINT YOUR WEBSITE</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard
              </p>
            </div>
            <div className="mint-price-item d-flex align-items-center justify-content-center">
              <div className="mint-price-bg-img">
                <img src="/images/mint-price-item-bg.svg" alt="" />
              </div>
              <div className="mint-price-content">
                <span className="count-text">Mint Price</span>
                <div className="mint-price  d-flex align-items-center justify-content-center">
                  <img src="/images/mint-price-bg.svg" alt="" />
                  <p className="count-text">{price} ETH Each</p>
                </div>
              </div>
            </div>
            <div className="mint-count-item">
              <div className="mint-count">
                <button onClick={()=>{
                  if(count >1){
                    setCount(count-1);
                  }
                }} className="mint-count-plus d-flex align-items-center justify-content-center">
                  <img src="/images/mint-plus-bg.svg" alt="" />
                  <span className="count-text">-</span>
                </button>
                <span className="count-text">{count}</span>
                <button onClick={()=>{
                  if(count<5){
                    setCount(count+1);
                  }
                }} className="mint-count-plus d-flex align-items-center justify-content-center">
                  <img src="/images/mint-plus-bg.svg" alt="" />
                  <span className="count-text">+</span>
                </button>
              </div>
              <p className="count-text">{count} Max</p>
            </div>
            <div className="mint-price-item d-flex align-items-center justify-content-center">
              <div className="mint-price-bg-img">
                <img src="/images/mint-price-item-bg.svg" alt="" />
              </div>
              <div className="mint-price-content">
                <span className="count-text">Total</span>
                <div className="mint-price  d-flex align-items-center justify-content-center">
                  <img src="/images/mint-price-bg.svg" alt="" />
                  <p className="count-text">{price * count} ETH Each</p>
                </div>
              </div>
            </div>
            <button onClick="selectWallet()" className="mint-btn d-flex align-items-center justify-content-center">
                <img src="/images/mint-btn-bg.svg" alt="" />
                <span>Mint Now</span>
            </button>

          </div>
        </div>
        <div className="mint-left-img">
            <img src="/images/mint-left-img.svg" alt="" />
        </div>
        <div className="mint-right-img">
            <img src="/images/mint-right-img.svg" alt="" />
        </div>
        <div className="mint-footer-img">
            <img src="/images/mint-footer.svg" alt="" />
        </div>
      </section>
    </>
  );
};

export default Mint;
