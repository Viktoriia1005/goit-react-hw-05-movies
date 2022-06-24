import { Outlet, NavLink } from 'react-router-dom';
import styles from '../App.module.css';

const AppBar = () => {
  let activeStyle = {
    color: 'red',
  };
  return (
    <header className={styles.header}>
      <NavLink
        to="/"
        className={styles.home}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Movies
      </NavLink>
      <hr />
      <Outlet />
    </header>
  );
};

export default AppBar;
