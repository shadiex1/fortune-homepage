import React, { Component } from "react";
import styles from "./Menu.module.scss";
import UserDropdown from "../userDropdown/userDropdown";
import NavDropdown from "../navDropdown/navDropdown";
import Searchbar from "../seachbar/searchbar"
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";
import { ReactComponent as CartIcon } from "../../../assets/icons/shopper.svg";
import { ReactComponent as UserIcon } from "../../../assets/icons/user.svg";
import { ReactComponent as WishlistIcon } from "../../../assets/icons/heart.svg";
import data from "../../../services/missingData.json"

class Menu extends Component {
  state = {
    showNavDropdown: false,
    showUser: false,
    showSearchbar:false,
  };


  searchbarToggleHandler = () => {
    this.setState((prevState) => {
      return { showSearchbar: !prevState.showSearchbar };
    });
  };
  userToggleHandler = () => {
    this.setState((prevState) => {
      return { showUser: !prevState.showUser };
    });
  };
  render() {
    return (
      <div onMouseLeave={()=>this.setState({showNavDropdown:false})}
      className={styles.menu}>
        {this.state.showUser ? (
          <UserDropdown
            open={this.state.showUser}
            closed={this.userToggleHandler}
          />
        ) : null}
        {this.state.showSearchbar ? <Searchbar closed={this.searchbarToggleHandler}/> : <div className={styles.banner}>
          <div>
            <div>
          <div
              onClick={this.props.showMenuSidebar}
              className={styles.toggler}
>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <img src={"/images/fortune/missingImages/menu/Rectangle.png"} alt="logo" />
            </div>
            <ul>
              <li>
                <SearchIcon onClick={this.searchbarToggleHandler}/>
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
        </div> }
        <nav className={styles.nav}>
          <ul>
            {
              data.navigation.map(navItem=>(
              <li  onMouseEnter={()=>this.setState({showNavDropdown:true})}>{navItem}</li>
              ))
            }
            
          </ul>
        </nav>
    

{this.state.showNavDropdown && <NavDropdown
onMouseEnter={()=>this.setState({showNavDropdown:true})}/>}

          
         
      </div>
    );
  }
}

export default Menu;
