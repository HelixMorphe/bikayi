import React from "react";
import styles from "../styles/containers/Category.module.css";
import Laureate from "./Laureate";

const Category = ({ year, data, category }) => {
  let filteredData = data.filter((item) => item.year === year);
  // console.log(category);
  if (category && category != "All")
    filteredData = filteredData.filter((item) => item.category === category);

  return (
    <div className={styles.container}>
      {filteredData.map((item) => (
        <div key={item.category} className={styles.categoryWrapper}>
          <p>{item.category}</p>
          <div className={styles.LaureateWrapper}>
            <Laureate data={item.laureates} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
