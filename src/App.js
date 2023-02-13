import { useState, useContext } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import Score from "./components/Score";
import StartScreen from "./components/StartScreen";
import InfoTipButton from "./components/ui/InfoTipButton";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import ResultsContext from "./store/results-context";
import EmptyTemplate from "./assets/template";
import Backdrop from "./components/ui/Backdrop";

function App() {
  const [newGame, setNewGame] = useState(true);

  const resCtx = useContext(ResultsContext);
  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(EmptyTemplate)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "template.json";

    link.click();
  };

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
      <InfoTipButton>
        <p>Please choose a mode to start the game:</p>
        <p>
          1) You can create your own set of questions and upload them for the
          game.
          <br />
          <a href="#" onClick={exportData}>
            Download a json template
          </a>{" "}
          to fill in with your questions.
        </p>
        <p>
          2) You can choose a basic set of questions pre-installed on the
          website
        </p>
        <p>
          3) You can choose a random set of questions by specifying the desired
          number of questions in the quiz.
        </p>
      </InfoTipButton>
    </div>
  );
}

export default App;
