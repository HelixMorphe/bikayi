import { LaureateCard } from "../components/index";
import { Category, Filter } from "./index";
import { useEffect, useState } from "react";
import styles from "../styles/containers/List.module.css";
const List = ({ data }) => {
  const [uniqueYears, setUniqueYears] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState();
  const [yearsFilter, setYearsFilter] = useState([]);
  useEffect(() => {
    const years = [...new Set(data.map((item) => item.year))];
    setUniqueYears(years);
    setYearsFilter(years);
  }, [data]);
  if (yearsFilter.length == 0) return <h1>Loading...</h1>;
  return (
    <>
      <Filter
        uniqueYears={uniqueYears}
        setYearsFilter={setYearsFilter}
        setCategoryFilter={setCategoryFilter}
      />
      {yearsFilter.map((item) => (
        <div className={styles.container} key={item}>
          <h1>{item}</h1>
          <Category year={item} data={data} category={categoryFilter} />
        </div>
      ))}
    </>
  );
};

export default List;
