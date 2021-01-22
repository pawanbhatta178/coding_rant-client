import React from "react";

const baseStyle =
  "text-xs font-light flex px-2 justify-center items-center cursor-pointer rounded-sm";

const styles = {
  active: `${baseStyle} bg-white text-gray-800 border-t-2 border-purple-700`,
  inActive: `${baseStyle} bg-gray-200 text-gray-500`,
};

const QuestionNavItem = ({ active, name, ...props }) => {
  return (
    <div
      {...props}
      className={active ? `${styles["active"]}` : `${styles["inActive"]}`}
    >
      {name}
    </div>
  );
};

export default QuestionNavItem;
