import React from "react";

const Badge = ({ values }) => {
  return (
    <>
      {values.map((value) => {
        return <span className="badge">{value}</span>;
      })}
    </>
  );
};

export default Badge;
