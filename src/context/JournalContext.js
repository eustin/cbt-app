import React, { useReducer } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const JournalContext = React.createContext();

const initialState = [
  {
    uuid: "some-uuid-1",
    situation: "I'm worried about my presentation that I need to give.",
    thoughts: "No one will like my presentation.",
    emotions: "Worry, anxiety, fear",
    behaviours: "Phone in sick. Try to avoid giving presentation.",
    altHypotheses: "People actually want to hear what I have to say.",
    reality:
      "A colleague told me that it was the best presentation he's seen at work.",
  },
  {
    uuid: "some-uuid-2",
    situation: "I feel stuck in my job and my career.",
    thoughts: "I'm not good enough and no one will hire me.",
    emotions: "Fear, depressed, sad",
    behaviours: "Avoid looking for job. Socially withdraw.",
    altHypotheses: "I am highly employable.",
    reality: "I applied to several roles and was invited to an interview!",
  },
];

// todo: complete actions
const journalReducer = (state, action) => {
  switch (action.type) {
    case "add_entry":
      return [...state, action.payload];
    case "edit_entry":
      const { payload } = action;
      return state.map((journalEntry) =>
        journalEntry.uuid === payload.uuid ? payload : journalEntry
      );
    case "delete_entry":
      return state.filter(
        (journalEntry) => journalEntry.uuid !== action.payload.uuid
      );
    default:
      return state;
  }
};

const addEntry = (dispatch) => {
  return (
    situation,
    thoughts,
    emotions,
    behaviours,
    altHypotheses,
    reality,
    navigationCallback
  ) => {
    dispatch({
      type: "add_entry",
      payload: {
        uuid: uuidv4(),
        situation,
        thoughts,
        emotions,
        behaviours,
        altHypotheses,
        reality,
      },
    });
    navigationCallback();
  };
};

const editEntry = (dispatch) => {
  return (
    uuid,
    situation,
    thoughts,
    emotions,
    behaviours,
    altHypotheses,
    reality,
    navigationCallback
  ) => {
    dispatch({
      type: "edit_entry",
      payload: {
        uuid,
        situation,
        thoughts,
        emotions,
        behaviours,
        altHypotheses,
        reality,
      },
    });
    navigationCallback();
  };
};

const deleteEntry = (dispatch) => {
  return (uuid, navigationCallback) => {
    dispatch({ type: "delete_entry", payload: { uuid } });
    navigationCallback();
  };
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
