import React from "react";

const DataMapping = ({ num, idName = "", cls }) => {
  return (
    <div>
      {Array.from({ length: num }, (_, i) => {
        return <span key={i} className={cls} id={idName + i}></span>;
      })}
    </div>
  );
};

export default DataMapping;
