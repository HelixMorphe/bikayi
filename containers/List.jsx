import { LaureateCard } from "../components/index";
import { Category } from "./index";
import { useEffect, useState } from "react";
const List = ({ data }) => {
  const [uniqueYears, setUniqueYears] = useState([]);
  useEffect(() => {
    const years = [...new Set(data.map((item) => item.year))];
    setUniqueYears(years);
  }, [data]);
  if (uniqueYears.length == 0) return <h1>Loading</h1>;
  return (
    <>
      {uniqueYears.map((item) => (
        <div key={item}>
          <h1>{item}</h1>
          <Category year={item} data={data} />
        </div>
      ))}
    </>
  );
};

export default List;