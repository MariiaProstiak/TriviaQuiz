import { useState, useContext } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import Score from "./components/Score";
import StartScreen from "./components/StartScreen";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import ResultsContext from "./store/results-context";

function App() {
  const [newGame, setNewGame] = useState(true);

  const resCtx = useContext(ResultsContext);

  const newGameHandler = (val) => {
    setNewGame(val);
  };

  const refresh = () => {
    setNewGame(true);
    resCtx.refresh();
  };

  if (resCtx.isLoading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="app">
      {newGame ? (
        <StartScreen startNewGame={newGameHandler} />
      ) : resCtx.isShowScore ? (
        <Score
          refresh={refresh}
          score={resCtx.score}
          questions={resCtx.questions}
        />
      ) : (
        <Quiz questions={resCtx.questions} loading={resCtx.isLoading} />
      )}
    </div>
  );
}

export default App;
