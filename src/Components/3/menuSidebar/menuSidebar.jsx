import React from "react";
import styles from "./menuSidebar.module.scss";
import Backdrop from "../backdrop/backdrop";
import logo from "../../../assets/menu/Rectangle.png";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const menuSidebar = (props)=>{
    let attachdstyles = [styles.sidebar, styles.Close];
    if (props.open) {
      attachdstyles = [styles.sidebar, styles.Open];
    }
    return(
        <React.Fragment>
    <Backdrop show={props.open} clicked={props.closed} />
  <div className={attachdstyles.join(" ")}>
        <div className={styles.title}>
            <img src={logo} alt="logo"/>
            <i onClick={props.closed} className="fas fa-times"></i>
        </div>
            <Accordion allowMultipleExpanded >
            <div className={styles.menu}>
            
            <div className={styles.header}>
                <span>Fragrance</span>
                <i className="fas fa-chevron-down"></i>
            </div>
            <AccordionItem>
            <AccordionItemHeading>
                    <AccordionItemButton>
            <div className={styles.header}>
                <span>Makeup</span>
                <i className="fas fa-chevron-down"></i>
            </div>
            </AccordionItemButton>
                </AccordionItemHeading>
                 <AccordionItemPanel>
                     <AccordionItem>
                         <AccordionItemHeading>
                         <AccordionItemButton>
                    <div className={styles.subHeader}>
                    <span>Face</span>
                <i className="fas fa-chevron-down"></i>
                    </div>
                    </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className={styles.baseItem}>
                            <span>All</span>
                            <span>Foundation</span>
                            <span>BB cream</span>
                            <span>Concealer</span>
                            <span>Fixer</span>
                            <span>General</span>
                            <span>Loose powder</span>
                            <span>Makeup remover</span>
                            <span>Primer</span>
                        </div>
                    </AccordionItemPanel>
                    </AccordionItem>
                </AccordionItemPanel>
                 <AccordionItemPanel>
                    <div className={styles.subHeader}>
                    <span>Lips</span>
                <i className="fas fa-chevron-down"></i>
                    </div>
                </AccordionItemPanel>
                 <AccordionItemPanel>
                    <div className={styles.subHeader}>
                    <span>Eyes</span>
                <i className="fas fa-chevron-down"></i>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
            <div className={styles.header}>
                <span>Skin Care</span>
                <i className="fas fa-chevron-down"></i>
            </div>
            <div className={styles.header}>
                <span>Brands</span>
            </div>
            <div className={styles.header}>
                <span>New Arrivals</span>
            </div>
            <div className={styles.header}>
                <span>Best Seller</span>
            </div>
            </div>
            
            </Accordion>
  </div>
  </React.Fragment>
    )
}


export default menuSidebar