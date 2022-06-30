import React from "react";
import { LaureateCard } from "../components";

const Laureate = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data?.map((item, index) => (
        <LaureateCard data={item} rank={index} />
      ))}
    </div>
  );
};

export default Laureate;
