import React from "react";

const Flags = ({ country }) => {
  return (
    <img
      className=" max-h-4 border"
      alt={country}
      src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`}
    />
  );
};

export default Flags;
