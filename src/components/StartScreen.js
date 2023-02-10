import { useContext, useRef, useState } from "react";
import ResultsContext from "../store/results-context";
import { questions as basiqueQuestions } from "../store/basicQuestions";
import Button from "./ui/Button";
import classes from "./StartScreen.module.css";
import StartOption from "./StartOption";

const StartScreen = (props) => {
  const [file, setFile] = useState("");
  const [mode, setMode] = useState("");
  const hiddenFileInput = useRef(null);
  const inputApiNumber = useRef(null);
  const resCtx = useContext(ResultsContext);
  let numberInput;

  const transformData = (data) => {
    const questions = data.map((question) => {
      const answersArr = question.incorrect_answers
        .map((answer) => {
          return {
            answerText: answer,
            isCorrect: false,
          };
        })
        .concat([{ answerText: question.correct_answer, isCorrect: true }]);
      return {
        questionText: question.question,
        answerOptions: answersArr
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value),
      };
    });
    console.log("res " + questions);
    return questions;
  };

  const startNewGameHandler = () => {
    resCtx.setIsLoading(true);
    if (resCtx.questions.length === 0) {
      const obj = transformData(basiqueQuestions);
      resCtx.uploadUserQuestions(obj);
    }
    props.startNewGame(false);
    resCtx.setIsLoading(false);
  };

  async function startNewRandomGameHandler() {
    resCtx.setIsLoading(true);
    const res = await fetch(
      "https://opentdb.com/api.php?amount=" + inputApiNumber.current.value
    )
      .then((res) => res.json())
      .then((data) => {
        const resp = transformData(data.results);
        resCtx.uploadUserQuestions(resp);
      });
    props.startNewGame(false);
    resCtx.setIsLoading(false);
  }

  const startNewFileGameHandler = () => {
    hiddenFileInput.current.click();
  };

  function handleChange(e) {
    resCtx.setIsLoading(true);
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      if (e.target.result) {
        setFile(e.target.result);
        let myObject = JSON.parse(e.target.result);
        const json = transformData(myObject);

        resCtx.uploadUserQuestions(json);
        props.startNewGame(false);
      }
    };
    resCtx.setIsLoading(false);
  }
  const startGameHandler = () => {
    if (mode === "file") {
      startNewFileGameHandler();
    } else if (mode === "basic") {
      startNewGameHandler();
    } else if (mode === "api" && numberInput) {
      startNewRandomGameHandler();
    }
  };
  const modeChangedHandler = (newMode) => {
    setMode(newMode);
  };
  const numberChangedHandler = () => {
    numberInput = inputApiNumber.current.value;
  };

  return (
    <div className="section__score">
      <div>Start new quiz?</div>
      <input
        id="file"
        name="file"
        type="file"
        onChange={handleChange}
        accept="application/JSON"
        ref={hiddenFileInput}
        style={{ display: "none" }}
      />
      <StartOption onModeChange={modeChangedHandler} />
      {mode === "api" && (
        <input
          className={classes.number}
          type="number"
          min="1"
          max="30"
          onChange={numberChangedHandler}
          ref={inputApiNumber}
        />
      )}
      <Button type="success" onClick={startGameHandler}>
        {"Start the game"}
      </Button>
    </div>
  );
};

export default StartScreen;
