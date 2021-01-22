import React from "react";

const Flags = ({ country, className }) => {
  return (
    <div className={className}>
      <img
        className="border"
        alt={country}
        src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`}
      />
    </div>
  );
};

export default Flags;
