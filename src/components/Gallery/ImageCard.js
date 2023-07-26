import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import FilterNftContentItem from './FilterNftContentItem';

const ImageCard = () => {
  return (
    <>
    {
        nftData.map((item, id)=>{
            return(
                <>
                 <div  data-bs-toggle="modal" data-bs-target="#nft-model" className="images-card d-flex align-items-center justify-content-center flex-column" key={id}>
                    <div className="nft-img">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="nft-titles">
                    <p>{item.title}</p>
                    <span>NO. {item.no}</span>
                    </div>
                 </div>
                </>
            )
        })
    }
{/* <!-- Button trigger modal --> */}

{/* <!-- Modal --> */}
<div className="modal fade " id="nft-model" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-xl">
    <div className="modal-content filter-item-model-image">
      <div className="modal-header filter-image-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body filter-image-item-model">
        <div className="filter-model-img">
            <LazyLoadImage 
            src='/images/nft-big-img.png'
            width='auto'
            height='auto'
            />
        </div>
        <div className="filter-nft-content">
            <div className="nft-title">
                <span>Elemental</span>
                <h4>7658//</h4>
            </div>
            <div className="filter-nft-content-items">
                <FilterNftContentItem/>
            </div>
            <div className="filter-nft-wallet-item mt-4 d-flex align-items-center justify-content-between gap-5">
                <div className="filter-nft-wallet d-flex align-items-center gap-2">
                    <div className="nft-address-icon">
                        <img src="/images/addres.svg" alt="" />
                    </div>
                    <div className="nft-wallet-content">
                        <p>0xee8f44373c756948a...9e0a950</p>
                        <span>Held since Jun. 2023 </span>
                    </div>
                </div>
                <button className="filter-nft-opensea">
                    <img src="/images/opensea.svg" alt="" />
                    <span>View On Opensea</span>
                </button>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default ImageCard;

const nftData=[
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
    {
        id:1,
        title:'Elemental',
        no:'4134',
        img:'/images/nft-1.png'
    },
]