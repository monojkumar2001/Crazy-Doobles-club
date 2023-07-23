import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TeamCardItem = ({img, title, bio}) => {
  return (
    <>
    <div className="team-img">
        <LazyLoadImage
        width="auto"
        height="auto"
        src={img}
        />
    </div>
    <h4>{title}</h4>
    <h4>{bio}</h4>
    </>
  )
}

export default TeamCardItem;
