import React, { useEffect, useState } from "react";
const FilterType = () => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
      setTypes(typeData);
    }, []);
  
    const handleChange = (e) => {
      const { name, checked } = e.target;
      if (name === "allSelect") {
        let tempType = types.map((type) => {
          return { ...type, isChecked: checked };
        });
        setTypes(tempType);
      } else {
        let tempType = types.map((type) =>
          type.name === name ? { ...type, isChecked: checked } : type
        );
        setTypes(tempType);
      }
    };
  return (
    <>
      <form className="form w-100">
        <li className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="allSelect"
            id="allSelect"
            checked={!types.some((type) => type?.isChecked !== true)}
            onChange={handleChange}
          />
          <label htmlFor="allSelect" className="form-check-label ms-2">All Select</label>
        </li>
        {types.map((type, index) => (
          <div className="form-check" key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              name={type.name}
              id={type.name}
              checked={type?.isChecked || false}
              onChange={handleChange}
            />
            <label htmlFor={type.name} className="form-check-label ms-2">{type.name}</label>
          </div>
        ))}
      </form>
    </>
  )
}

export default FilterType;

const typeData = [
    { name: "Jeevan" },
    { name: "Manish" },
    { name: "Prince" },
    { name: "Arti" },
    { name: "rahul" }
  ];
  