import { useState, useContext } from "react";
import styles from "./Quiz.module.css";
import ResultsContext from "../store/results-context.js";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import Button from "./ui/Button";

const Quiz = (props) => {
  const resCtx = useContext(ResultsContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentResponse, setCurrentResponse] = useState(false);
  const [selected_answer, setSelected_answer] = useState();
  const [showAnswers, setShowAnswers] = useState(false);
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      resCtx.addToScore();
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < props.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      resCtx.updateShowScore(true);
    }
    setShowAnswers(false);
    setSelected_answer("");
    setCurrentResponse("");
  };
  const onAnswerChangeHandler = (isCorrect, index) => {
    setCurrentResponse(isCorrect);
    setSelected_answer(index);
  };

  const validateResponseHandler = () => {
    setShowAnswers(true);
    setTimeout(() => {
      handleAnswerOptionClick(currentResponse);
    }, 2000);
  };
  function styler(option, index) {
    console.log(
      option.answerText + ": " + currentResponse + " " + option.isCorrect
    );
    console.log(selected_answer + " " + index);
    if (showAnswers === true) {
      if (currentResponse ^ (currentResponse !== option.isCorrect)) {
        return { backgroundColor: "#94D7A2" }; //green
      } else if (selected_answer === index) {
        return { backgroundColor: "#F8BCBC" }; //red
      } else {
        return { backgroundColor: "#252d4a" }; //blue basic
      }
    } else {
      return selected_answer === index
        ? { backgroundColor: "#234668" } //blue selected
        : { backgroundColor: "#252d4a" }; //blue basic
    }
  }

  if (props.loading) {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div className={styles.quizz}>
      <div className={styles.question__section}>
        <div className={styles.question__count}>
          <span>Вопрос {currentQuestion + 1}</span> / {props.questions.length}
        </div>
        <div className={styles.question__text}>
          {props.questions[currentQuestion].questionText}
        </div>
      </div>
      <div className={styles.answer__section}>
        {props.questions[currentQuestion].answerOptions.map((item, index) => (
          <button
            key={index}
            onClick={() => onAnswerChangeHandler(item.isCorrect, index)}
            style={styler(item, index)}
          >
            {item.answerText}
          </button>
        ))}
        <Button type="success" onClick={validateResponseHandler}>
          {"Validate response"}
        </Button>
      </div>
    </div>
  );
};

export default Quiz;
