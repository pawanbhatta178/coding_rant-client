import React from "react";

const splitPaneContext = React.createContext();

const SplitPane = ({ minLeftWidth, minRightWidth, children, ...props }) => {
  const [leftWidth, setLeftWidth] = React.useState(null);
  const [totalWidth, setTotalWidth] = React.useState(null);
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
    if (
      newLeftWidth > parseInt(minLeftWidth) &&
      newLeftWidth < parseInt(totalWidth) - parseInt(minRightWidth)
    ) {
      separatorXPosition.current = e.clientX;
      setLeftWidth(newLeftWidth);
    }
  };

  const onMouseUp = () => {
    separatorXPosition.current = null;
  };

  const onResize = (e) => {
    setTotalWidth(splitPaneRef.current.clientWidth);
  };

  React.useEffect(() => {
    if (!totalWidth) {
      console.log(splitPaneRef.current.clientWidth);
      setTotalWidth(splitPaneRef.current.clientWidth);
      return;
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    window.addEventListener("resize", onResize);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("resize", onResize);
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
    <div className="w-1/2 border " ref={leftRef}>
      {children}
    </div>
  );
};

const RightSplit = ({ children }) => {
  return <div className="w-1/2">{children} </div>;
};

export default SplitPane;
