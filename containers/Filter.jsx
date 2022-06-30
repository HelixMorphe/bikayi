import React, { useState } from "react";
import styles from "../styles/containers/Filter.module.css";
const yearArray = [];
for (let i = 2018; i > 1900; i--) {
  yearArray.push(i);
}
const categoryArray = [
  "chemistry",
  "economics",
  "literature",
  "peace",
  "physics",
  "medicine",
];
const Filter = ({ uniqueYears, setYearsFilter, setCategoryFilter }) => {
  const handleChange = (e) => {
    if (e.target.value == "All") setYearsFilter(uniqueYears);
    else {
      setYearsFilter([e.target.value]);
    }
  };
  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };
  return (
    <div className={styles.container}>
      <select className={styles.selectContainer} onChange={handleChange}>
        <option disabled selected>
          --select year--
        </option>
        <option value={null}>All</option>
        {yearArray.map((item) => (
          <option key={item} value={`${item}`}>
            {item}
          </option>
        ))}
      </select>

      <select
        className={styles.selectContainer}
        onChange={handleCategoryChange}
      >
        <option disabled selected>
          --select category--
        </option>
        <option value={null}>All</option>
        {categoryArray.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
