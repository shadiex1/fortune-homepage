import React, { Component } from "react";
import styles from "./Menu.module.scss";
import logo from "../../../assets/menu/Rectangle.png";
import UserDropdown from "../userDropdown/userDropdown";
import NavDropdown from "../navDropdown/navDropdown";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import { ReactComponent as CartIcon } from "../../../assets/icons/shopper.svg";
import { ReactComponent as UserIcon } from "../../../assets/icons/user.svg";
import { ReactComponent as WishlistIcon } from "../../../assets/icons/heart.svg";

class Menu extends Component {
  state = {
    showNavDropdown: false,
    showUser: false,
  };

  navDropdownToggleHandler = () => {
    this.setState((prevState) => {
      return { showNavDropdown: !prevState.showNavDropdown };
    });
  };
  userToggleHandler = () => {
    this.setState((prevState) => {
      return { showUser: !prevState.showUser };
    });
  };
  render() {
    return (
      <div className={styles.menu}>
        {this.state.showUser ? (
          <UserDropdown
            open={this.state.showUser}
            closed={this.userToggleHandler}
          />
        ) : null}
        <div className={styles.banner}>
          <div>
            <img src={logo} alt="logo" />
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <UserIcon onClick={this.userToggleHandler} />
              </li>
              <li>
                <WishlistIcon />
              </li>
              <li>
                <CartIcon onClick={this.props.showCart} />
              </li>
            </ul>
          </div>
        </div>
        <nav className={styles.nav}>
          <ul>
            <div
              onClick={this.props.showMenuSidebar}
              className={styles.toggler}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <li onClick={this.navDropdownToggleHandler}>Fragrance</li>
            <li onClick={this.navDropdownToggleHandler}>Makeup</li>
            <li onClick={this.navDropdownToggleHandler}>Skin Care</li>
            <li onClick={this.navDropdownToggleHandler}>Brands</li>
            <li onClick={this.navDropdownToggleHandler}>New Arrivals</li>
            <li onClick={this.navDropdownToggleHandler}>Best Sellers</li>
          </ul>
        </nav>
        {this.state.showNavDropdown ? (
          <NavDropdown
            open={this.state.showNavDropdown}
            closed={this.navDropdownToggleHandler}
          />
        ) : null}
      </div>
    );
  }
}

export default Menu;
