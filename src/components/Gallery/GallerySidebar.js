import React, { useState } from "react";
import FilterType from "./FilterType/FilterType";

const GallerySidebar = () => {
  const [activeFilter, SetActiveFilter] = useState();
  const toggleFilter=(index)=>{
    SetActiveFilter(index);
  }

  const [checkbox, setCheckbox]=useState([]);

  return (
    <>
      <div className="gallery-sideber-wrapper">
        <div className="filter-title">
          <h4>FILTER</h4>
        </div>
        <div className="filter-items">
          <div className="filter-search-item">
            <img src="/images/search-icon.svg" alt="" />
            <input type="text" placeholder="Sort by serial..."/>
          </div>
          <div className="filter-list-items">
            <div className="filter-list-item mb-2">
              <div className={ activeFilter === 1 ? "filter-item-bar active-filter-item-bar": "filter-item-bar"}
              onClick={()=>{
                if(activeFilter===1){
                  toggleFilter();
                }else{
                  toggleFilter(1)
                }
              }}
              >
                <div className="filter-left-items d-flex align-items-center gap-2 ">
                  <div className="filter-type">
                    <img src="./images/type.svg" alt="" />
                  </div>
                  <span>Type</span>
                </div>
                <span className="toggle-icons">
                  <img src="/images/mayness.svg" alt="" />
                </span>
              </div>
              <ul
                 className={
                    activeFilter ===1 ?
                    "filter-list-item-ber active"
                    :"filter-list-item-ber"
                }
              >
                {/* <li className="">
                  <input type="checkbox" id="filter-1"/>
                  <label htmlFor="filter-1">HUMAN</label>
                </li>
                <li className="">
                  <input type="checkbox" />
                  <label htmlFor="">HUMAN</label>
                </li>
                <li className="">
                  <input type="checkbox" />
                  <label htmlFor="">HUMAN</label>
                </li>
                <li>Type</li>
                <li>Type</li>
                <li>Type</li> */}
                <FilterType/>
              </ul>
            </div>
            <div className="filter-list-item mb-2">
              <div className={ activeFilter === 2 ? "filter-item-bar active-filter-item-bar": "filter-item-bar"}
              onClick={()=>{
                if(activeFilter===2){
                  toggleFilter();
                }else{
                  toggleFilter(2)
                }
              }}
              >
                <div className="filter-left-items d-flex align-items-center gap-2 ">
                  <div className="filter-type">
                    <img src="./images/special.svg" alt="" />
                  </div>
                  <span>Special</span>
                </div>
                <span className="toggle-icons">
                  <img src="/images/mayness.svg" alt="" />
                </span>
              </div>
              <ul
                 className={
                    activeFilter ===2 ?
                    "filter-list-item-ber active"
                    :"filter-list-item-ber"
                }
              >
                <li>Type</li>
                <li>Type</li>
                <li>Type</li>
                <li>Type</li>
              </ul>
            </div>
            <div className="filter-list-item mb-2">
              <div className={ activeFilter === 3 ? "filter-item-bar active-filter-item-bar": "filter-item-bar"}
              onClick={()=>{
                if(activeFilter===3){
                  toggleFilter();
                }else{
                  toggleFilter(3)
                }
              }}
              >
                <div className="filter-left-items d-flex align-items-center gap-2 ">
                  <div className="filter-type">
                    <img src="./images/jacket-2.svg" alt="" />
                  </div>
                  <span>Clothing</span>
                </div>
                <span className="toggle-icons">
                  <img src="/images/mayness.svg" alt="" />
                </span>
              </div>
              <ul
                 className={
                    activeFilter ===3 ?
                    "filter-list-item-ber active"
                    :"filter-list-item-ber"
                }
              >
                <li>Type</li>
                <li>Type</li>
                <li>Type</li>
                <li>Type</li>
              </ul>
            </div>
            <div className="filter-list-item mb-2">
              <div className={ activeFilter === 4 ? "filter-item-bar active-filter-item-bar": "filter-item-bar"}
              onClick={()=>{
                if(activeFilter===4){
                  toggleFilter();
                }else{
                  toggleFilter(4)
                }
              }}
              >
                <div className="filter-left-items d-flex align-items-center gap-2 ">
                  <div className="filter-type">
                    <img src="./images/off-hand.svg" alt="" />
                  </div>
                  <span>Offhand</span>
                </div>
                <span className="toggle-icons">
                  <img src="/images/mayness.svg" alt="" />
                </span>
              </div>
              <ul
                 className={
                    activeFilter ===4 ?
                    "filter-list-item-ber active"
                    :"filter-list-item-ber"
                }
              >
                <li>Type</li>
                <li>Type</li>
                <li>Type</li>
                <li>Type</li>
              </ul>
            </div>
            <div className="filter-list-item mb-2">
              <div className={ activeFilter === 5 ? "filter-item-bar active-filter-item-bar": "filter-item-bar"}
              onClick={()=>{
                if(activeFilter===5){
                  toggleFilter();
                }else{
                  toggleFilter(5)
                }
              }}
              >
                <div className="filter-left-items d-flex align-items-center gap-2 ">
                  <div className="filter-type">
                    <img src="./images/hair.svg" alt="" />
                  </div>
                  <span>Hair</span>
                </div>
                <span className="toggle-icons">
                  <img src="/images/mayness.svg" alt="" />
                </span>
              </div>
              <ul
                 className={
                    activeFilter ===5 ?
                    "filter-list-item-ber active"
                    :"filter-list-item-ber"
                }
              >
                <li>Type</li>
                <li>Type</li>
                <li>Type</li>
                <li>Type</li>
              </ul>
            </div>
            <div className="filter-list-item mb-2">
              <div className={ activeFilter === 6 ? "filter-item-bar active-filter-item-bar": "filter-item-bar"}
              onClick={()=>{
                if(activeFilter===6){
                  toggleFilter();
                }else{
                  toggleFilter(6)
                }
              }}
              >
                <div className="filter-left-items d-flex align-items-center gap-2 ">
                  <div className="filter-type">
                    <img src="./images/handgear.svg" alt="" />
                  </div>
                  <span>Headgear</span>
                </div>
                <span className="toggle-icons">
                  <img src="/images/mayness.svg" alt="" />
                </span>
              </div>
              <ul
                 className={
                    activeFilter ===6 ?
                    "filter-list-item-ber active"
                    :"filter-list-item-ber"
                }
              >
                <li>Type</li>
                <li>Type</li>
                <li>Type</li>
                <li>Type</li>
              </ul>
            </div>
            <div className="filter-list-item mb-2">
              <div className={ activeFilter === 7 ? "filter-item-bar active-filter-item-bar": "filter-item-bar"}
              onClick={()=>{
                if(activeFilter===7){
                  toggleFilter();
                }else{
                  toggleFilter(7)
                }
              }}
              >
                <div className="filter-left-items d-flex align-items-center gap-2 ">
                  <div className="filter-type">
                    <img src="./images/face.svg" alt="" />
                  </div>
                  <span>Face</span>
                </div>
                <span className="toggle-icons">
                  <img src="/images/mayness.svg" alt="" />
                </span>
              </div>
              <ul
                 className={
                    activeFilter ===7 ?
                    "filter-list-item-ber active"
                    :"filter-list-item-ber"
                }
              >
                <li>Type</li>
                <li>Type</li>
                <li>Type</li>
                <li>Type</li>
              </ul>
            </div>
            <div className="filter-list-item mb-2">
              <div className={ activeFilter === 8 ? "filter-item-bar active-filter-item-bar": "filter-item-bar"}
              onClick={()=>{
                if(activeFilter===8){
                  toggleFilter();
                }else{
                  toggleFilter(8)
                }
              }}
              >
                <div className="filter-left-items d-flex align-items-center gap-2 ">
                  <div className="filter-type">
                    <img src="./images/neck.svg" alt="" />
                  </div>
                  <span>Neck</span>
                </div>
                <span className="toggle-icons">
                  <img src="/images/mayness.svg" alt="" />
                </span>
              </div>
              <ul
                 className={
                    activeFilter ===8 ?
                    "filter-list-item-ber active"
                    :"filter-list-item-ber"
                }
              >
                <li>Type</li>
                <li>Type</li>
                <li>Type</li>
                <li>Type</li>
              </ul>
            </div>
            <div className="filter-list-item mb-2">
              <div className={ activeFilter === 9 ? "filter-item-bar active-filter-item-bar": "filter-item-bar"}
              onClick={()=>{
                if(activeFilter===9){
                  toggleFilter();
                }else{
                  toggleFilter(9)
                }
              }}
              >
                <div className="filter-left-items d-flex align-items-center gap-2 ">
                  <div className="filter-type">
                    <img src="./images/eyes-2.svg" alt="" />
                  </div>
                  <span>Eyes</span>
                </div>
                <span className="toggle-icons">
                  <img src="/images/mayness.svg" alt="" />
                </span>
              </div>
              <ul
                 className={
                    activeFilter ===9 ?
                    "filter-list-item-ber active"
                    :"filter-list-item-ber"
                }
              >
                <li>Type</li>
                <li>Type</li>
                <li>Type</li>
                <li>Type</li>
              </ul>
            </div>
            <div className="filter-list-item mb-2">
              <div className={ activeFilter === 10 ? "filter-item-bar active-filter-item-bar": "filter-item-bar"}
              onClick={()=>{
                if(activeFilter===10){
                  toggleFilter();
                }else{
                  toggleFilter(10)
                }
              }}
              >
                <div className="filter-left-items d-flex align-items-center gap-2 ">
                  <div className="filter-type">
                    <img src="./images/mouth.svg" alt="" />
                  </div>
                  <span>Mouth</span>
                </div>
                <span className="toggle-icons">
                  <img src="/images/mayness.svg" alt="" />
                </span>
              </div>
              <ul
                 className={
                    activeFilter ===10 ?
                    "filter-list-item-ber active"
                    :"filter-list-item-ber"
                }
              >
                <li>Type</li>
                <li>Type</li>
                <li>Type</li>
                <li>Type</li>
              </ul>
            </div>
            <div className="filter-list-item mb-2">
              <div className={ activeFilter === 11 ? "filter-item-bar active-filter-item-bar": "filter-item-bar"}
              onClick={()=>{
                if(activeFilter===11){
                  toggleFilter();
                }else{
                  toggleFilter(11)
                }
              }}
              >
                <div className="filter-left-items d-flex align-items-center gap-2 ">
                  <div className="filter-type">
                    <img src="./images/ear.svg" alt="" />
                  </div>
                  <span>Ear</span>
                </div>
                <span className="toggle-icons">
                  <img src="/images/mayness.svg" alt="" />
                </span>
              </div>
              <ul
                 className={
                    activeFilter ===11 ?
                    "filter-list-item-ber active"
                    :"filter-list-item-ber"
                }
              >
                <li>Type</li>
                <li>Type</li>
                <li>Type</li>
                <li>Type</li>
              </ul>
            </div>
            <div className="filter-list-item mb-2">
              <div className={ activeFilter === 12 ? "filter-item-bar active-filter-item-bar": "filter-item-bar"}
              onClick={()=>{
                if(activeFilter===12){
                  toggleFilter();
                }else{
                  toggleFilter(12)
                }
              }}
              >
                <div className="filter-left-items d-flex align-items-center gap-2 ">
                  <div className="filter-type">
                    <img src="./images/background.svg" alt="" />
                  </div>
                  <span>Background</span>
                </div>
                <span className="toggle-icons">
                  <img src="/images/mayness.svg" alt="" />
                </span>
              </div>
              <ul
                 className={
                    activeFilter ===12 ?
                    "filter-list-item-ber active"
                    :"filter-list-item-ber"
                }
              >
                <li>Type</li>
                <li>Type</li>
                <li>Type</li>
                <li>Type</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GallerySidebar;
