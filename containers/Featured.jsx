import React, { useState, useEffect } from "react";
import styles from "../styles/containers/Featured.module.css";
const Featured = ({ data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const array = [];

  useEffect(() => {
    const ids = new Set();
    const array = [];
    const filterdPrizes = [];
    const makeASet = data.map((prize) =>
      prize.laureates?.map((person) => {
        if (ids.has(person.id) && person.surname) {
          let info = {
            id: person.id,
            firstname: person.firstname,
            surname: person.surname,
            motive: person.motivation,
          };
          array.push(info);
        } else ids.add(person.id);
      })
    );

    setFilteredData(array);
  }, []);
  if (filteredData.length == 0) return <div>Loadin</div>;
  console.log(filteredData);
  return (
    <div className={styles.container}>
      <h1>Featured</h1>
      <div className={styles.personWrapper}>
        {filteredData.map((item) => (
          <div className={styles.person}>
            <h2>
              {item.firstname} {item.surname}
            </h2>
            <p>{item.motive}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
