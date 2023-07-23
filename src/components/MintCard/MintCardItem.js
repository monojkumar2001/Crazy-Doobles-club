import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
const MintCardItem = ({title, img, description}) => {
  return (
    <>
    <div className="mint-item-card d-flex flex-column gap-4 align-items-center justify-content-center">
      <h2>{title}</h2>
      <div className="mint-item-img">
      <LazyLoadImage 
          width='auto'
          height='auto'
          src={img}
          />
      </div>
      <p>{description}</p>
    </div>
    </>
  )
}

export default MintCardItem;
