import React from "react";
import Laureate from "./Laureate";

const Category = ({ year, data }) => {
  const filteredData = data.filter((item) => item.year === year);

  return (
    <div>
      {filteredData.map((item) => (
        <div>
          <p>{item.category}</p>
          <Laureate data={item.laureates} />
        </div>
      ))}
    </div>
  );
};

export default Category;
