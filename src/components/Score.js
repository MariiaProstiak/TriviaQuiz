import Button from "./ui/Button";

const Score = (props) => {
  return (
    <div className="section__score">
      <div>
        You have {props.score} correct answers from {props.questions.length}
      </div>
      <Button type="success" onClick={props.refresh}>
        {"Play Again"}
      </Button>
    </div>
  );
};

export default Score;
