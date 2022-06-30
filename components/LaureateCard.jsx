import React from "react";
import styles from "../styles/components/LaureateCard.module.css";
const LaureateCard = ({ data, rank }) => {
  const { firstname, surname, motivation } = data;
  return (
    <div className={styles.container}>
      <h1>{rank + 1}.</h1>
      <div className={styles.details}>
        <h1>
          {firstname} {surname}
        </h1>
        <p>{motivation}</p>
      </div>
    </div>
  );
};

export default LaureateCard;
