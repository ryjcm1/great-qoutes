import { NavLink , Route} from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <NavLink className={classes.logo} to="/quotes">Great Quotes</NavLink>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/quotes">All Quotes</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/new-quote">Add a Quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
