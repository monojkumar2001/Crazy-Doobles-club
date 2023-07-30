import React from 'react'
import Marquee from 'react-fast-marquee'

const TextMarqueeItem = () => {
  return (
    <>
    <Marquee>
        {
            data.map((item, i)=>{
                return(
                <div className="text-marquee-item" key={i}>
                    <h2>{item.text}</h2>
                </div>
                )
            })
        }
    </Marquee>
    </>
  )
}

export default TextMarqueeItem;

const data=[
    {
        id:1,
        text:'crazy doodles'
    },
    {
        id:2,
        text:'crazy doodles'
    },
    {
        id:3,
        text:'crazy doodles'
    },
    {
        id:4,
        text:'crazy doodles'
    },
    {
        id:5,
        text:'crazy doodles'
    },
    {
        id:6,
        text:'crazy doodles'
    },
]