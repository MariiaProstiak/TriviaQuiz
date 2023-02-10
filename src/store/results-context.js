import { createContext, useState } from "react";

const ResultsContext = createContext({
  questions: [],
  score: 0,
  addToScore: () => {},
  isShowScore: false,
  updateShowScore: () => {},
  uploadUserQuestions: (string) => {},
  refresh: () => {},
  isLoading: false,
  setIsLoading: () => {},
});

export function ResultsContextProvider(props) {
  const [userQuestions, setUserQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(false);

  const refresh = () => {
    setUserQuestions([]);
    setScore(0);
    setShowScore(false);
  };

  const uploadQuestionsHandler = (questionsSet) => {
    setUserQuestions(questionsSet);
  };

  const scoreUpdateHandler = () => {
    setScore(score + 1);
  };

  const context = {
    questions: userQuestions,
    score: score,
    isShowScore: showScore,
    addToScore: scoreUpdateHandler,
    uploadUserQuestions: uploadQuestionsHandler,
    refresh,
    updateShowScore: setShowScore,
    isLoading: loading,
    setIsLoading: setLoading,
  };
  return (
    <ResultsContext.Provider value={context}>
      {props.children}
    </ResultsContext.Provider>
  );
}

export default ResultsContext;
