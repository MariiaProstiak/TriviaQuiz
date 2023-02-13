import classes from "./InfoTipButton.module.css";

const InfoTipButton = (props) => {
  return (
    <div className={classes.info}>
      <a href="#info" title="Rules" className={classes.info__icon}>
        i
      </a>

      <div id="info" className={classes.info__body}>
        <a href="#" className={classes.info__close}>
          X
        </a>
        <div className={classes.info__text}>{props.children}</div>
      </div>
    </div>
  );
};

export default InfoTipButton;
