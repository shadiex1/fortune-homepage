import React from "react";
import styles from "./navDropdown.module.scss";
import categoryImg from "../../../assets/Image69.png";
import Backdrop from "../backdrop/backdrop"

const navDropdown = (props) => (
    <React.Fragment>

<Backdrop show={props.open} clicked={props.closed} />
    <div className={styles.dropdown}>
        <div className={styles.categories}>
        <div className={styles.category}>
            <h3>FACE</h3>
            <ul>
                <li>All</li>
                <li>Foundation</li>
                <li>BB cream</li>
                <li>Concealer</li>
                <li>Fixer</li>
                <li>General</li>
                <li>Loose powder</li>
                <li>Makeup remover</li>
                <li>Primer</li>
            </ul>
            </div>
            <div className={styles.category}>
            <h3>LIPS</h3>
            <ul>
                <li>All</li>
                <li>Foundation</li>
                <li>BB cream</li>
                <li>Concealer</li>
                <li>Fixer</li>
            </ul>
            </div>
            <div className={styles.category}>
            <h3>EYES</h3>
            <ul>
                <li>All</li>
                <li>Foundation</li>
                <li>BB cream</li>
                <li>Concealer</li>
                <li>Fixer</li>
                <li>General</li>
                <li>Loose powder</li>
                <li>Makeup remover</li>
            </ul>
            </div>
        </div>

        <div className={styles.categoryImg}>
             <img src={categoryImg} alt="category"/>
        </div>
        
        
    </div>
    </React.Fragment>
)

export default navDropdown