import React from "react";
import styles from "./Home.module.scss";
import Menu from "../../../Components/3/Menu/Menu";
import Showcase from "../../../Components/3/Showcase/Showcase";
import ProductsOverview from "../../../Components/3/products Overview/productsOverview";
import BrandsCollection from "../../../Components/3/brands collection/brandsCollection";
import AllProducts from "../../../Components/3/all products/AllProducts";
import VrPlaceholder from "../../../Components/3/vrPlaceholder/vrPlaceholder";
import LogoSlider from "../../../Components/3/logoSlider/logoSlider"
const Home =()=>(
    <div className={styles.Home}>
        <Menu/>
        <Showcase/>
        <ProductsOverview/>
        <BrandsCollection/>
        <AllProducts/>
        <VrPlaceholder/>
        <LogoSlider/>
    </div>
) 

export default Home