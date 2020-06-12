import React, { Component } from "react";
import styles from "./Home.module.scss";
import Menu from "../../../Components/3/Menu/Menu";
import Showcase from "../../../Components/3/Showcase/Showcase";
import ProductsOverview from "../../../Components/3/products Overview/productsOverview";
import BrandsCollection from "../../../Components/3/brands collection/brandsCollection";
import AllProducts from "../../../Components/3/all products/AllProducts";
import VrPlaceholder from "../../../Components/3/vrPlaceholder/vrPlaceholder";
import LogoSlider from "../../../Components/3/logoSlider/logoSlider";
import Branches from "../../../Components/3/branches/branches";
import Footer from "../../../Components/3/Footer/Footer";
import CartSidebar from "../../../Components/3/cartSidebar/cartSidebar";
import MenuSidebar from "../../../Components/3/menuSidebar/menuSidebar";

class Home extends Component {
  state = {
    cartItems: [],
    showCart: false,
    showUser: false,
    showMenuSidebar: false,
  };

  showCartClosedHandler = () => {
    this.setState({ showCart: false });
  };
  showCartToggleHandler = () => {
    this.setState((prevState) => {
      return { showCart: !prevState.showCart };
    });
  };

  showMenuSidebarClosedHandler = () => {
    this.setState({ showMenuSidebar: false });
  };
  showMenuSidebarToggleHandler = () => {
    this.setState((prevState) => {
      return { showMenuSidebar: !prevState.showMenuSidebar };
    });
  };

  addItemToCart = (item) => {
    const cartItems = [...this.state.cartItems];

    const existingCartItem = cartItems.find(
      cartItem => cartItem.title === item.title
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.title === item.title
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } cartItems.push(item);


   
    this.setState({ cartItems });
  };
  render() {
    return (
      <div className={styles.Home}>
        <Menu
          showMenuSidebar={this.showMenuSidebarToggleHandler}
          toggleUser={this.toggleUserHandler}
          showUserDropdown={this.state.showUser}
          showCart={this.showCartToggleHandler}
        />
        <Showcase />
        <ProductsOverview addItem={(item) => this.addItemToCart(item)} />
        <BrandsCollection />
        <AllProducts addItem={(item) => this.addItemToCart(item)} />
        <VrPlaceholder />
        <LogoSlider />
        <Branches />
        <Footer />
        <CartSidebar
          open={this.state.showCart}
          closed={this.showCartClosedHandler}
          cart={this.state.cartItems}
        />
        <MenuSidebar
          open={this.state.showMenuSidebar}
          closed={this.showMenuSidebarClosedHandler}
        />
      </div>
    );
  }
}

export default Home;
