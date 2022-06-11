import React, { useReducer } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const JournalContext = React.createContext();

const initialState = [
  {
    uuid: "some-uuid-1",
    situation: "I'm worried about my presentation that I need to give.",
    threatCognition: "No one will like my presentation.",
    emotions: "Worry, anxiety, fear",
    behaviours: "Phone in sick. Try to avoid giving presentation.",
    alternativeHypotheses: "People actually want to hear what I have to say.",
    whatActuallyHappened:
      "A colleague told me that it was the best presentation he's seen at work.",
  },
  {
    uuid: "some-uuid-2",
    situation: "I feel stuck in my job and my career.",
    threatCognition: "I'm not good enough and no one will hire me.",
    emotions: "Fear, depressed, sad",
    behaviours: "Avoid looking for job. Socially withdraw.",
    alternativeHypotheses: "I am highly employable.",
    whatActuallyHappened:
      "I applied to several roles and was invited to an interview!",
  },
];


// todo: complete actions
const journalReducer = (state, action) => {
  switch (action.type) {
    case "add_entry":
      return state;
    case "edit_entry":
      return state;
    case "delete_entry":
      return state;
    default:
      return state;
  }
};

// todo: complete addEntry
const addEntry = (dispatch) => {
  return () => dispatch({ type: "add_entry" });
};

// todo: complete editEntry
const editEntry = (dispatch) => {
  return () => dispatch({ type: "edit_entry" });
};

// todo: complete deleteEntry
const deleteEntry = (dispatch) => {
  return () => dispatch({ type: "delete_entry" });
};

const JournalContextProvider = ({ children }) => {
  const [journalEntries, dispatch] = useReducer(journalReducer, initialState);

  // todo: refactor this. it's a bit awkward.
  const actions = {
    addEntry: addEntry(dispatch),
    editEntry: editEntry(dispatch),
    deleteEntry: deleteEntry(dispatch),
  };

  return (
    <JournalContext.Provider value={{ journalEntries, ...actions }}>
      {children}
    </JournalContext.Provider>
  );
};

export { JournalContext, JournalContextProvider };
