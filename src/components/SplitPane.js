import React from "react";

const splitPaneContext = React.createContext();

const SplitPane = ({ children, ...props }) => {
  const [leftWidth, setLeftWidth] = React.useState(null);
  const separatorXPosition = React.useRef(null);

  const splitPaneRef = React.createRef();

  const onMouseDown = (e) => {
    separatorXPosition.current = e.clientX;
  };

  const onMouseMove = (e) => {
    if (!separatorXPosition.current) {
      return;
    }

    const newLeftWidth = leftWidth + e.clientX - separatorXPosition.current;
    separatorXPosition.current = e.clientX;

    setLeftWidth(newLeftWidth);
  };

  const onMouseUp = () => {
    separatorXPosition.current = null;
  };

  React.useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  });

  return (
    <div className="flex border h-full" {...props} ref={splitPaneRef}>
      <splitPaneContext.Provider value={{ leftWidth, setLeftWidth }}>
        <LeftSplit children={children[0]} />
        <div
          className="border-4 border-gray-200 cursor-move"
          onMouseDown={onMouseDown}
        />
        <RightSplit children={children[1]} />
      </splitPaneContext.Provider>
    </div>
  );
};

const LeftSplit = ({ children }) => {
  const leftRef = React.createRef();
  const { leftWidth, setLeftWidth } = React.useContext(splitPaneContext);
  React.useEffect(() => {
    if (!leftWidth) {
      console.log(leftRef.current.clientWidth);
      setLeftWidth(leftRef.current.clientWidth);
      leftRef.current.style.flex = "none";
      return;
    }
    leftRef.current.style.width = `${leftWidth}px`;
  });
  return (
    <div className="w-1/2" ref={leftRef}>
      {children}
    </div>
  );
};

const RightSplit = ({ children }) => {
  return <div className="w-1/2">{children} </div>;
};

export default SplitPane;
