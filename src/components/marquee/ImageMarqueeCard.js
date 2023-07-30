import React from 'react'
import Marquee from "react-fast-marquee";
const ImageMarqueeCard = () => {
  return (
    <>
<Marquee>
{
        ImageData.map((item, i)=>{
            return(
                <div className="image-marquee-card" key={i}>
        <img src={item.img} alt="" />
    </div>
            )
        })
    }
</Marquee>
    </>
  )
}

export default ImageMarqueeCard;

const ImageData=[
    {
        id:1,
        img:'/images/marque-1.svg'
    },
    {
        id:2,
        img:'/images/marque-2.svg'
    },
    {
        id:3,
        img:'/images/marque-3.svg'
    },
    {
        id:4,
        img:'/images/marque-4.svg'
    },
    {
        id:5,
        img:'/images/marque-5.svg'
    },
    {
        id:6,
        img:'/images/marque-6.svg'
    },
    {
        id:7,
        img:'/images/marque-7.svg'
    },
]