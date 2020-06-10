import React from "react";
import styles from "./Menu.module.scss";
import logo from "../../../assets/menu/Rectangle.png";

const Menu = (props)=> (
    <div className={styles.menu}>
    <div className={styles.banner}>
        <div><img src={logo} alt="logo"/>
        <ul>
            <li>
            <i className="fas fa-search"></i>
            </li>
            <li>
            <i className="far fa-user-circle"></i>
            </li>
            <li>
            <i className="far fa-heart"></i>
            </li>
            <li>
            <i onClick={props.showCart} className="fas fa-shopping-cart"></i>
            </li>
        </ul> 
        </div>
        
    </div>
        <nav className={styles.nav}>
           
            <ul> 
                <div className={styles.toggler}>
                <span></span>
                <span></span>
                <span></span>
            </div>
                <li>
                    Fragrance
                </li>
                <li>
                    Makeup
                </li>
                <li>
                    Skin Care
                </li>
                <li>
                    Brands
                </li>
                <li>
                    New Arrivals
                </li>
                <li>
                    Best Sellers
                </li>
            </ul>
        </nav>
    </div>
)

export default Menu