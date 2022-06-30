import React from "react";
import { LaureateCard } from "../components";
import styles from "../styles/containers/Laureate.module.css";
const Laureate = ({ data }) => {
  return (
    <div className={styles.container}>
      {data?.map((item, index) => (
        <LaureateCard key={item.id} data={item} rank={index} />
      ))}
    </div>
  );
};

export default Laureate;
