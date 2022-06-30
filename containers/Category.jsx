import React from "react";
import styles from "../styles/containers/Category.module.css";
import Laureate from "./Laureate";

const Category = ({ year, data }) => {
  const filteredData = data.filter((item) => item.year === year);

  return (
    <div className={styles.container}>
      {filteredData.map((item) => (
        <div className={styles.categoryWrapper}>
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
