import React from "react";
import { CSSTransition } from "react-transition-group";
import Icon from "./Icon";

const Code = ({ source }) => {
  const [hover, setHover] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, [2000]);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <div
      className="relative border rounded-lg my-4 bg-gray-800 text-gray-200 text-xs overflow-auto"
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
    >
      <CSSTransition
        in={hover}
        unmountOnExit
        classNames="button"
        timeout={1000}
      >
        <div
          className="absolute right-1 top-1 opacity-95 bg-gray-200 text-gray-800 p-1 rounded-md cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(source);
            setCopied(true);
          }}
        >
          {copied ? <Icon type="Copied" /> : <Icon type="Copy" />}
        </div>
      </CSSTransition>
      <pre className="p-6">{source}</pre>
    </div>
  );
};

export default Code;
