import React, { useReducer } from "react";

const JournalContext = React.createContext();

const initialState = [
  {
    id: 1,
    situation: "I'm worried about my presentation that I need to give.",
    threatCognition: "No one will like my presentation.",
    emotions: "Worry, anxiety, fear",
    behaviours: "Phone in sick. Try to avoid giving presentation.",
    alternativeHypotheses: "People actually want to hear what I have to say.",
    whatActuallyHappened:
      "A colleague told me that it was the best presentation he's seen at work.",
  },
  {
    id: 2,
    situation: "I feel stuck in my job and my career.",
    threatCognition: "I'm not good enough and no one will hire me.",
    emotions: "Fear, depressed, sad",
    behaviours: "Avoid looking for job. Socially withdraw.",
    alternativeHypotheses: "I am highly employable.",
    whatActuallyHappened:
      "I applied to several roles and was invited to an interview!",
  },
];


const journalReducer = ({ state, action }) => {
  
};

const JournalContextProvider = ({ children }) => {
  const [journalEntries, dispatch] = useReducer(journalReducer, initialState);

  return (
    <JournalContext.Provider value={{ journalEntries }}>
      {children}
    </JournalContext.Provider>
  );
};

export { JournalContext, JournalContextProvider };
