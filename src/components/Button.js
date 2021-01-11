export const ButtonType = {
    primary: "bg-blue-700 hover:bg-blue-800 text-gray-100 font-semibold rounded-lg shadow ",
    secondary: "bg-gray-100 hover:bg-gray-300 hover:border-blue-500 text-blue-800 font-semibold  border border-blue-300 shadow rounded-lg",
    basic: "bg-transparent hover:text-blue-500 text-blue-800 font-semibold rounded-lg",
    delete: "bg-red-300 hover:bg-red-500 text-white font-semibold rounded-lg shadow",
    deleteOutline:"bg-white hover:bg-gray-200 hover:border-red-500 text-red-500 font-semibold rounded-lg border border-red-300 shadow",
};

export const ButtonSize = {
  sm: "py-2 px-4 text-xs",
  lg: "py-2 px-10 text-base",
  xl:"py-3 px-8 text-lg"
}

const Button=({size, type, children, disabled})=> {

    // This can be improved. I’m keeping it simple here by joining two strings.
    const classNames = ButtonType[type] + " " + ButtonSize[size];
    return (disabled ? <button  className={`${classNames} opacity-50 cursor-not-allowed hover:none`}>{children}</button> : <button className={classNames}>{children}</button>);
    
}

export default Button;