import React from "react";
import { Link } from "react-router-dom";
const RoadmapItemcard = ({parsen, title}) => {
  return (
    <>
          <div className="roadmap-content-item">
            <div className="roadmap-persen">
              <h1>{parsen}</h1>
            </div>
            <h4>{title}</h4>
            <Link href={'#'} className="buy-opensea-btn" >Buy On OpenSea</Link>
          </div>
    </>
  );
};

export default RoadmapItemcard;

