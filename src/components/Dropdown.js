import React, { useState, useContext } from "react";
import OptionMenu from "./OptionMenu";
import EditorContext from "../EditorContext";

const Dropdown = () => {
  const [showOptions, setShowOptions] = useState(false);
  const { editor, editorDispatch } = useContext(EditorContext);
  console.log(typeof editor);
  const { languages, chosenLang } = editor;
  const resetOnChange = (e) => {
    editorDispatch({ type: "CHANGE_LANG", payload: e.target.id });
    setShowOptions(false);
  };

  return (
    <>
      <div className="bg-white relative text-xs font-light text-gray-800">
        <div
          className="inline-flex space-x-2 py-2 px-2 border cursor-pointer"
          onClick={() => {
            setShowOptions(!showOptions);
          }}
        >
          <div className=" flex-1 w-16">
            {
              languages?.filter((language) => language.id === chosenLang)[0]
                ?.name
            }
          </div>
          <div className="contents">
            <div className="pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="16"
                fill="currentColor"
                className={
                  showOptions
                    ? "rotate-90 bi bi-caret-down-fill"
                    : "bi bi-caret-down-fill"
                }
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </div>
          </div>
        </div>
        {showOptions && (
          <OptionMenu
            options={languages?.filter(
              (language) => language.id !== chosenLang
            )}
            onSelect={resetOnChange}
          />
        )}
      </div>
    </>
  );
};

export default Dropdown;
