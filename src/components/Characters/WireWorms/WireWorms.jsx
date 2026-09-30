import React from "react";

const WireWorms = () => {
  return (
    <div className="wireworm">
      <div className="wireworm-body">
        {Array.from({ length: 10 }, (_, i) => {
          return (
            <div
              key={i}
              id={i}
              className={`wireworm-cell ${i % 2 === 0 ? "even" : "old"}`}
              style={{
                width: `${i < 9 ? 100 / 10 : 15}%`,
                height: `${i == 9 && 14}px`,
                left: `${i * 10}px`,
                top: `${i <= 3 ? i * -1 : i > 3 && i < 6 ? i * -0.5 : i * 0.2}px`,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default WireWorms;
