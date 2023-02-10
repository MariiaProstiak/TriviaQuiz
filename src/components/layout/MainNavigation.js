import { useHistory } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import DrawerToggle from "../../components/layout/SideDrawer/DrawerToggle/DrawerToggle";
import NavigationItems from "../../components/layout/SideDrawer/NavigationItems/NavigationItems";

export const MainNavigation = (props) => {
  const history = useHistory();
  function homeHandler() {
    history.push("/");
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <button onClick={homeHandler} className={classes.home}>
          <i className="fa fa-home"></i> Meetups
        </button>
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
      <DrawerToggle clicked={props.drawerToggleClicked} isOpen={props.isOpen} />
    </header>
  );
};
