import classes from "./DrawerToggle.module.css";

const DrawerToggle = (props) => {
  console.log(props);
  const styles = props.isOpen
    ? `${classes.DrawerToggle} ${classes._active}`
    : classes.DrawerToggle;

  return (
    <div className={styles} onClick={props.clicked}>
      <span></span>
    </div>
  );
};

export default DrawerToggle;
