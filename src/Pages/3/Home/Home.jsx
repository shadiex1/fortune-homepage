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

class Home extends Component {
    state={
        cartItems:[],
        showCart:false

    }

    showCartClosedHandler=()=>{
        this.setState({showCart:false})
    }
    showCartToggleHandler =()=>{
      this.setState((prevState) => {return {showCart: !prevState.showCart}})
  }
    addItemToCart=(item)=>{
        const cartItems=[...this.state.cartItems]
        cartItems.push(item);
        this.setState({cartItems})
      }
    render(){
        return(
            <div className={styles.Home}>
        <Menu showCart={this.showCartToggleHandler}/>
        <Showcase/>
        <ProductsOverview addItem={(item)=>this.addItemToCart(item)}/>
        <BrandsCollection/>
        <AllProducts/>
        <VrPlaceholder/>
        <LogoSlider/>
        <Branches/>
        <Footer/>
        <CartSidebar open={this.state.showCart} closed={this.showCartClosedHandler} cart={this.state.cartItems}/>
        
    </div>
        )
    }
}

export default Home