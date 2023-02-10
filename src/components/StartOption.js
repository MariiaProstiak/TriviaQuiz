import classes from "./StartOption.module.css";

const StartOption = (props) => {
  const setGameMode = (e) => {
    props.onModeChange(e.target.value);
  };

  return (
    <div className={classes.options} onChange={setGameMode.bind(this)}>
      <input
        label="Start with your custom set of questions from file"
        type="radio"
        id="male"
        name="select"
        value="file"
      />
      <input
        label="Start with basic set of questions"
        type="radio"
        id="female"
        name="select"
        value="basic"
      />
      <input
        label="Start with rundom set of questions"
        type="radio"
        id="other"
        name="select"
        value="api"
      />
    </div>
  );
};

export default StartOption;
