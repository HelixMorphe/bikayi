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
    console.log(e.target.value);
    setCategoryFilter(e.target.value);
  };
  return (
    <div className={styles.container}>
      <select onChange={handleChange}>
        <option value={null}>All</option>
        {yearArray.map((item) => (
          <option value={`${item}`}>{item}</option>
        ))}
      </select>

      <select onChange={handleCategoryChange}>
        <option value={null}>All</option>
        {categoryArray.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
