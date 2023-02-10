import { useContext } from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import FavoritesContext from "../../../../store/favorites-context";

const NavigationItems = (props) => {
  const favoritesCtx = useContext(FavoritesContext);
  const badgeStyle = {
    backgroundColor: "#cc2062",
    color: "white",
    borderRadius: "12px",
    padding: "0 16px",
    marginLeft: "8px",
  };

  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        All Meetups
      </NavigationItem>
      <NavigationItem link="/favorites">
        My Favorites
        <span style={badgeStyle}>{favoritesCtx.totalFavorites}</span>
      </NavigationItem>

      <NavigationItem link="/new-meetup">New Meetup</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
