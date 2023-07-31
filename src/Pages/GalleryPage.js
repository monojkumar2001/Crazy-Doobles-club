import React, { useState, useEffect } from "react";
import "./Gallery.css";
import GallerySidebar from "../components/Gallery/GallerySidebar";
import ImageCard from "../components/Gallery/ImageCard";
import axios from "axios";
import FilterType from "../components/Gallery/FilterType/FilterType";
const GalleryPage = () => {
  const [filterActive, setFilterActive] = useState([false]);
  const toggleFilterMenu = () => {
    setFilterActive(!filterActive);
  };

  const [activeFilter, SetActiveFilter] = useState();
  const toggleFilter = (index) => {
    SetActiveFilter(index);
  };
  function refreshPage() {
    window.location.reload(false);
  }

  const [NFTs, setNFTs] = useState([]);

  const [uniqueData, setUniqueData] = useState([]);

  const [selectedValues, setSelectedValues] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');

 
  function handleSearchQueryChange(event) {
    setSearchQuery(event.target.value);
  }

  function performSearch(query) {
    return uniqueData.filter((nft) => {
      return (
        nft.name.toLowerCase().includes(query.toLowerCase()) ||
        nft.description.toLowerCase().includes(query.toLowerCase())
      );
    });
  }

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      const filteredResults = performSearch(searchQuery);
      setFilteredData(filteredResults); // Update filteredData with the search results
    } else {
      setFilteredData(uniqueData); // Show all data if searchQuery is empty
    }
  }, [searchQuery, uniqueData]);



  const fetchData = async () => {
    try {
      const totalSupply = 500;
      let i;

      for (i = 1; i < totalSupply; i++) {
        const url = `https://ipfs.io/ipfs/QmQQyTiUHzrH4NmUFpu3r9WbgVPVVVQ7NBhmveswMRHXhK/${i}.json`;
        const response = await axios.get(url);
        const result = response.data;
        setNFTs((prev) => [...prev, result]);
      }

      console.log(i);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  NFTs.forEach((nft) => {
    const data = [];
    const isDuplicate = uniqueData.some(
      (uniqueNft) =>
        uniqueNft.name === nft.name &&
        uniqueNft.edition === nft.edition &&
        uniqueNft.image === nft.image
    );

    if (!isDuplicate) {
      data.push(nft);
      setUniqueData((uniqueData) => [...uniqueData, ...data]);
    }
  });

  const ShowValue = (value) => {
    const Subcata = uniqueData.map((nft) => {
      // Check if 'nft.attributes' and 'nft.attributes[value]' are defined before accessing 'value'
      return nft.attributes?.[value]?.value;
    });
    // Remove duplicates using Set
    const uniqueValues = [...new Set(Subcata)];
  
    return uniqueValues;
  };

 

  function calculateTotalTraitType(value) {
    const filteredNfts = uniqueData.filter((nft) => {
      // Assuming the attributes array contains the key "value" (as shown in the provided data)
      return nft.attributes.some((attribute) => attribute.value === value);
    });
    return filteredNfts.length;
  }
  

  function handleCheckboxChange(e) {
    const value = e.target.value;
    const isChecked = e.target.checked;
    const updatedSelectedValues = [...selectedValues];
  
    if (isChecked) {
      updatedSelectedValues.push(value);
    } else {
      const index = updatedSelectedValues.indexOf(value);
      if (index !== -1) {
        updatedSelectedValues.splice(index, 1);
      }
    }
  
    setSelectedValues(updatedSelectedValues);
    setIsFiltering(true); // Set the filtering flag to true when checkboxes are changed
    setFilteredData(filterDataByAttributes(uniqueData, updatedSelectedValues));
  }
  

 


  function filterDataByAttributes(data, selectedValues) {
    return data.filter((nft) => {
      return selectedValues.some((value) => {
        return nft.attributes.some((attribute) => {
          return attribute.value === value;
        });
      });
    });
  }

  useEffect(() => {
    if (isFiltering) {
      setFilteredData(filterDataByAttributes(uniqueData, selectedValues));
    } else {
      setFilteredData(uniqueData);
    }
  }, [isFiltering, uniqueData, selectedValues]);
  
  
  

  return (
    <>
      <div className="gallery">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className="gallery-sidebar">
                <div
                  className={`${filterActive ? "" : "active"} sidebar-filter`}
                >
                  <div className="filter-close-menu" onClick={toggleFilterMenu}>
                    <img src="./images/close.svg" alt="" />
                  </div>
                  {/* <GallerySidebar /> */}

                  <div className="gallery-sideber-wrapper">
                    <div className="filter-title">
                      <h4>FILTER</h4>
                    </div>
                    <div className="filter-items">
                      <div className="filter-search-item">
                        <img src="/images/search-icon.svg" alt="" />
                        <input type="text"
                         value={searchQuery}
                         onChange={handleSearchQueryChange}
                        placeholder="Sort by serial..." />
                      </div>
                      <div className="filter-list-items">
                        <div className="filter-list-item mb-2">
                          <div
                            className={
                              activeFilter === 1
                                ? "filter-item-bar active-filter-item-bar"
                                : "filter-item-bar"
                            }
                            onClick={() => {
                              if (activeFilter === 1) {
                                toggleFilter();
                              } else {
                                toggleFilter(1);
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
                              activeFilter === 1
                                ? "filter-list-item-ber active"
                                : "filter-list-item-ber"
                            }
                          >
                            {/* <FilterType/> */}
                            {ShowValue(0).map((value, index) => (
                     <li className="form-check"key={index}>
                      <input
                        type="checkbox"
                        name={value}
                        value={value}
                        checked={selectedValues.includes(value)}
                        onChange={handleCheckboxChange}
                        className="form-check-input"
                      />
                      <p className="acme-white-24">{value} {calculateTotalTraitType(value)}</p>
                    </li>
                  ))}
                           
                         
                           
                          </ul>
                        </div>
                        <div className="filter-list-item mb-2">
                          <div
                            className={
                              activeFilter === 2
                                ? "filter-item-bar active-filter-item-bar"
                                : "filter-item-bar"
                            }
                            onClick={() => {
                              if (activeFilter === 2) {
                                toggleFilter();
                              } else {
                                toggleFilter(2);
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
                              activeFilter === 2
                                ? "filter-list-item-ber active"
                                : "filter-list-item-ber"
                            }
                          >
                             {ShowValue(1).map((value, index) => (
                     <li className="form-check"key={index}>
                      <input
                        type="checkbox"
                        name={value}
                        value={value}
                        checked={selectedValues.includes(value)}
                        onChange={handleCheckboxChange}
                        className="form-check-input"
                      />
                      <p className="acme-white-24">{value} {calculateTotalTraitType(value)}</p>
                    </li>
                  ))}
                          </ul>
                        </div>
                        <div className="filter-list-item mb-2">
                          <div
                            className={
                              activeFilter === 3
                                ? "filter-item-bar active-filter-item-bar"
                                : "filter-item-bar"
                            }
                            onClick={() => {
                              if (activeFilter === 3) {
                                toggleFilter();
                              } else {
                                toggleFilter(3);
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
                              activeFilter === 3
                                ? "filter-list-item-ber active"
                                : "filter-list-item-ber"
                            }
                          >
                            {ShowValue(2).map((value, index) => (
                     <li className="form-check"key={index}>
                      <input
                        type="checkbox"
                        name={value}
                        value={value}
                        checked={selectedValues.includes(value)}
                        onChange={handleCheckboxChange}
                        className="form-check-input"
                      />
                      <p className="acme-white-24">{value} {calculateTotalTraitType(value)}</p>
                    </li>
                  ))}
                          </ul>
                        </div>
                        <div className="filter-list-item mb-2">
                          <div
                            className={
                              activeFilter === 4
                                ? "filter-item-bar active-filter-item-bar"
                                : "filter-item-bar"
                            }
                            onClick={() => {
                              if (activeFilter === 4) {
                                toggleFilter();
                              } else {
                                toggleFilter(4);
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
                              activeFilter === 4
                                ? "filter-list-item-ber active"
                                : "filter-list-item-ber"
                            }
                          >
                             {ShowValue(3).map((value, index) => (
                     <li className="form-check"key={index}>
                      <input
                        type="checkbox"
                        name={value}
                        value={value}
                        checked={selectedValues.includes(value)}
                        onChange={handleCheckboxChange}
                        className="form-check-input"
                      />
                      <p className="acme-white-24">{value} {calculateTotalTraitType(value)}</p>
                    </li>
                  ))}
                          </ul>
                        </div>
                        <div className="filter-list-item mb-2">
                          <div
                            className={
                              activeFilter === 5
                                ? "filter-item-bar active-filter-item-bar"
                                : "filter-item-bar"
                            }
                            onClick={() => {
                              if (activeFilter === 5) {
                                toggleFilter();
                              } else {
                                toggleFilter(5);
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
                              activeFilter === 5
                                ? "filter-list-item-ber active"
                                : "filter-list-item-ber"
                            }
                          >
                            <li>Type</li>
                            <li>Type</li>
                            <li>Type</li>
                            <li>Type</li>
                          </ul>
                        </div>
                        <div className="filter-list-item mb-2">
                          <div
                            className={
                              activeFilter === 6
                                ? "filter-item-bar active-filter-item-bar"
                                : "filter-item-bar"
                            }
                            onClick={() => {
                              if (activeFilter === 6) {
                                toggleFilter();
                              } else {
                                toggleFilter(6);
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
                              activeFilter === 6
                                ? "filter-list-item-ber active"
                                : "filter-list-item-ber"
                            }
                          >
                            <li>Type</li>
                            <li>Type</li>
                            <li>Type</li>
                            <li>Type</li>
                          </ul>
                        </div>
                        <div className="filter-list-item mb-2">
                          <div
                            className={
                              activeFilter === 7
                                ? "filter-item-bar active-filter-item-bar"
                                : "filter-item-bar"
                            }
                            onClick={() => {
                              if (activeFilter === 7) {
                                toggleFilter();
                              } else {
                                toggleFilter(7);
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
                              activeFilter === 7
                                ? "filter-list-item-ber active"
                                : "filter-list-item-ber"
                            }
                          >
                            <li>Type</li>
                            <li>Type</li>
                            <li>Type</li>
                            <li>Type</li>
                          </ul>
                        </div>
                        <div className="filter-list-item mb-2">
                          <div
                            className={
                              activeFilter === 8
                                ? "filter-item-bar active-filter-item-bar"
                                : "filter-item-bar"
                            }
                            onClick={() => {
                              if (activeFilter === 8) {
                                toggleFilter();
                              } else {
                                toggleFilter(8);
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
                              activeFilter === 8
                                ? "filter-list-item-ber active"
                                : "filter-list-item-ber"
                            }
                          >
                            <li>Type</li>
                            <li>Type</li>
                            <li>Type</li>
                            <li>Type</li>
                          </ul>
                        </div>
                        <div className="filter-list-item mb-2">
                          <div
                            className={
                              activeFilter === 9
                                ? "filter-item-bar active-filter-item-bar"
                                : "filter-item-bar"
                            }
                            onClick={() => {
                              if (activeFilter === 9) {
                                toggleFilter();
                              } else {
                                toggleFilter(9);
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
                              activeFilter === 9
                                ? "filter-list-item-ber active"
                                : "filter-list-item-ber"
                            }
                          >
                            <li>Type</li>
                            <li>Type</li>
                            <li>Type</li>
                            <li>Type</li>
                          </ul>
                        </div>
                        <div className="filter-list-item mb-2">
                          <div
                            className={
                              activeFilter === 10
                                ? "filter-item-bar active-filter-item-bar"
                                : "filter-item-bar"
                            }
                            onClick={() => {
                              if (activeFilter === 10) {
                                toggleFilter();
                              } else {
                                toggleFilter(10);
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
                              activeFilter === 10
                                ? "filter-list-item-ber active"
                                : "filter-list-item-ber"
                            }
                          >
                            <li>Type</li>
                            <li>Type</li>
                            <li>Type</li>
                            <li>Type</li>
                          </ul>
                        </div>
                        <div className="filter-list-item mb-2">
                          <div
                            className={
                              activeFilter === 11
                                ? "filter-item-bar active-filter-item-bar"
                                : "filter-item-bar"
                            }
                            onClick={() => {
                              if (activeFilter === 11) {
                                toggleFilter();
                              } else {
                                toggleFilter(11);
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
                              activeFilter === 11
                                ? "filter-list-item-ber active"
                                : "filter-list-item-ber"
                            }
                          >
                            <li>Type</li>
                            <li>Type</li>
                            <li>Type</li>
                            <li>Type</li>
                          </ul>
                        </div>
                        <div className="filter-list-item mb-2">
                          <div
                            className={
                              activeFilter === 12
                                ? "filter-item-bar active-filter-item-bar"
                                : "filter-item-bar"
                            }
                            onClick={() => {
                              if (activeFilter === 12) {
                                toggleFilter();
                              } else {
                                toggleFilter(12);
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
                              activeFilter === 12
                                ? "filter-list-item-ber active"
                                : "filter-list-item-ber"
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
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 ">
              <div className={`${filterActive ? "" : "active"} overlays`}></div>
              <div className="gallery-wrapper">
                <div className="gallery-header-item d-flex align-items-center justify-content-between">
                  <div className="gallery-con-btn d-flex align-items-center gap-3">
                    <button>ALl</button>
                    <button>MY COLLECTION</button>
                  </div>
                  <div className="gallery-count d-flex align-items-center gap-3">
                    <span>12450</span>
                    <button
                      className="gallery-refresh-btn"
                      onClick={refreshPage}
                    >
                      <img src="/images/refresh.svg" alt="" />
                    </button>
                    <button
                      className="filter-menu-icon"
                      onClick={toggleFilterMenu}
                    >
                      <img src="/images/filter-menu.svg" alt="" />
                    </button>
                  </div>
                </div>
                <div className="gallery-card-items">
                  <ImageCard uniqueData={filteredData} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-blur-1"></div>
        <div className="gallery-blur-2"></div>
      </div>
    </>
  );
};

export default GalleryPage;
