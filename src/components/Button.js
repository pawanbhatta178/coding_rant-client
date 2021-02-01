const baseButtonStyle = "flex ";

export const ButtonType = {
  primary:
    "secondary-bg secondary-text font-semibold rounded shadow-2xl border bg-gradient-to-r from-purple-500 to-purple-900 hover:bg-purple-700 focus:outline-none ",
  secondary: `${baseButtonStyle} primary-bg primary-text hover  border border-purple-300 hover:border-purple-800 font-semibold shadow rounded focus:outline-none `,
  basic:
    "bg-transparent opacity-70 hover:opacity-100 text-gray-800 focus:outline-none  ",
  basicPurple:
    "bg-transparent opacity-70  text-purple-800 hover:text-purple-900 focus:outline-none ",
  neutral:
    "bg-gray-700 hover:bg-gray-800 text-gray-200  font-light border rounded shadow focus:outline-none border border-gray-600",
  delete:
    "bg-red-500 hover text-white font-semibold rounded shadow focus:outline-none ",
  deleteOutline: `${baseButtonStyle} bg-white hover hover:border-red-500 text-red-500 font-semibold rounded border border-red-300 shadow focus:outline-none `,
};

export const ButtonSize = {
  xs: "text-xs py-2",
  sm: "py-2 px-6 text-xs",
  lg: "py-2 px-10 text-base",
  xl: "py-3 px-8 text-base",
};

export const disabledStyle = "opacity-50 hover:opacity-50 cursor-not-allowed";

const Button = ({ size, type, children, disabled, ...props }) => {
  // This can be improved. I’m keeping it simple here by joining two strings.
  const classNames = ButtonType[type] + " " + ButtonSize[size];
  return (
    <button
      {...props}
      className={
        disabled
          ? `${classNames} ${props.className} ${disabledStyle}`
          : `${classNames} ${props.className}`
      }
    >
      {children}
    </button>
  );
};

export default Button;
