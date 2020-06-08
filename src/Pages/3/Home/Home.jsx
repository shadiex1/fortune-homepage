import React from "react";
import styles from "./Home.module.scss";
import Menu from "../../../Components/3/Menu/Menu";
import Showcase from "../../../Components/3/Showcase/Showcase"
const Home =()=>(
    <div className={styles.Home}>
        <Menu/>
        <Showcase/>
    </div>
) 

export default Home