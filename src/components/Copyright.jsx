import React from "react";

const Copyright = () => {
  const year = new Date().getFullYear();
  return (
    <div className="text-center">
      Copyright {year}{" "}
      <a className="link" href="github.com/ramadanriz">
        Rizky Ramadhani
      </a>
    </div>
  );
};

export default Copyright;
