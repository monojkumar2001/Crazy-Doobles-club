import React from 'react'
import TimerCard from '../components/Timer/TimerCard'
import SocialMediaLinkItem from '../components/SocialMediaLink/SocialMediaLinkItem';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const WhiteListPage2 = () => {
  return (
    <>
    <div className="whitelist">
        <div className="container">
            <div className="whitelist-wrapper d-flex flex-column align-items-center ">
                <h1 className='section-title'>EXCLUSIVE ACCESS</h1>
                <p>wHITELLIST AND NFT DROPS</p>
                <TimerCard/>
                <div className="input-email-item mb-4 mt-4">
                    <input type="email" placeholder='ENTER YOUR EMAIL' />
                </div>
                <div className="custom-btn">
                Join discord 
                </div>
              <div className="social-media-items mt-4">
              <SocialMediaLinkItem/>
              </div>
            </div>
        </div>
        <div className="white-list-img">
          <LazyLoadImage 
          width='auto'
          height='auto'
          src='/images/white-list-img.svg'
          />
        </div>
        <div className="mb-white-list-img">
          <LazyLoadImage 
          width='auto'
          height='auto'
          src='/images/m-white-list-img.svg'
          />
        </div>
        <div className="white-list-blur"></div>
    </div>
    </>
  )
}

export default WhiteListPage2;