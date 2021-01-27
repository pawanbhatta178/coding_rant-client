const lang = [
  { id: "js", name: "JavaScript", active: true, more: "Some more information" },
  { id: "py", name: "Python", active: true, more: "Coming soon" },
  { id: "go", name: "Golang", active: true, more: "Coming soon" },
  { id: "ts", name: "Typescript", active: true, more: "Coming soon" },
  { id: "c", name: "C", active: false, more: "Coming soon" },
  { id: "cpp", name: "C++", active: false, more: "Some more information" },
  { id: "java", name: "Java", active: true, more: "Some more information" },
];

const defaultCodes = [
  {
    1: {
      js: "//your js code for quest 1 goes here",
      py: "//your py code for quest1  goes here",
      ts: "//your ts code for question 1 goes here",
    },
    2: {
      js: "//your js code for question 2 goes here",
      py: "//your py code for question 2 goes here",
      ts: "//your ts code for question 2 goes here",
    },
  },
];

const editorReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LANG":
      if (
        lang.find((key) => key.id === action.payload && key.active === true)
      ) {
        return { ...state, chosenLang: action.payload };
      }
      return state;
    case "UPDATE_CODE":
      return { ...state, code: action.payload };
    default:
      return state;
  }
};

export default editorReducer;
