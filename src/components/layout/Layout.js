import { useContext } from "react";
import classes from "./Layout.module.css";
import { MainNavigation } from "./MainNavigation";
import SideDrawer from "./SideDrawer/SideDrawer";
import FavoritesContext from "../../store/favorites-context";

export const Layout = (props) => {
  const ctx = useContext(FavoritesContext);

  return (
    <div className={classes.Layout}>
      <MainNavigation
        drawerToggleClicked={ctx.toggleSideBar}
        isOpen={ctx.sideBarIsOpen}
      ></MainNavigation>
      <SideDrawer open={ctx.sideBarIsOpen} closed={ctx.closeSideBar} />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};
