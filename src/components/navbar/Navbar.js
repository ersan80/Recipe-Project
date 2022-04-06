import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div  className={styles.navbar}>
        <div>
           <span className={styles.span}>ERSAN80</span><Link to="/main" className={styles.recipe}  >RECIPE</Link> 
        </div>
      <div className={styles.navbar2}>
       <Link to="/about" className={styles.link}>ABOUT</Link>
      <Link to="" className={styles.link} onClick={()=> window.location.href="https://github.com/ersan80"}>GITHUB</Link>
      <Link to="/" className={styles.link}>LOGOUT</Link> 
      </div>
      

    </div>
  );
};

export default Navbar;
