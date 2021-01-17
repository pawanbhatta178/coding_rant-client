import React from "react";

const Input = ({ ...props }) => {
  const [value, setValue] = React.useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="mt-4">
      <input
        className="w-full h-10 border focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-sm"
        {...props}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
