import { Fragment } from "react";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../ui/Backdrop";
import NavigationItems from "./NavigationItems/NavigationItems";

const SideDrawer = (props) => {
  let attachedClasses = props.open ? classes.Open : classes.Close;

  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div
        className={classes.sideDrawer + " " + attachedClasses}
        onClick={props.closed}
      >
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
