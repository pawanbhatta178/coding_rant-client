const baseButtonStyle = "flex ";

export const ButtonType = {
  primary:
    "secondary-bg secondary-text hover font-semibold rounded shadow border border-purple-500",
  secondary: `${baseButtonStyle} primary-bg primary-text hover  border border-purple-300 hover:border-purple-800 font-semibold shadow rounded`,
  basic: "bg-transparent hover primary-text font-semibold rounded",
  neutral:
    "bg-gray-600 text-gray-200 hover font-semibold border rounded shadow",
  delete: "bg-red-500 hover text-white font-semibold rounded shadow",
  deleteOutline: `${baseButtonStyle} bg-white hover hover:border-red-500 text-red-500 font-semibold rounded border border-red-300 shadow`,
};

export const ButtonSize = {
  sm: "py-2 px-6 text-xs",
  lg: "py-2 px-10 text-base",
  xl: "py-3 px-8 text-lg",
};

export const disabledStyle = "opacity-50 hover:opacity-50 cursor-not-allowed";

const Button = ({ size, type, children, disabled }) => {
  // This can be improved. I’m keeping it simple here by joining two strings.
  const classNames = ButtonType[type] + " " + ButtonSize[size];
  return (
    <button
      className={disabled ? `${classNames} ${disabledStyle}` : classNames}
    >
      {children}
    </button>
  );
};

export default Button;
