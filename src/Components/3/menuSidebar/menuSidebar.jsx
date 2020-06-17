import React from "react";
import styles from "./menuSidebar.module.scss";
import Backdrop from "../backdrop/backdrop";
import logo from "../../../assets/menu/Rectangle.png";
import data from "../../../services/missingData.json"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const menuSidebar = (props) => {
  let attachdstyles = [styles.sidebar, styles.Close];
  if (props.open) {
    attachdstyles = [styles.sidebar, styles.Open];
  }
  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachdstyles.join(" ")}>
        <div className={styles.title}>
          <img src={logo} alt="logo" />
          <i onClick={props.closed} className="fas fa-times"></i>
        </div>
        <Accordion allowMultipleExpanded>
          <div className={styles.menu}>
            {data.navigation.slice(0,1).map(item=>(
              <div className={styles.header}>
              <span>{item}</span>
              <i className="fas fa-chevron-down"></i>
            </div>
            ))}

            {data.navigation.slice(1,2).map(
              item=>(
                 <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton style={{ outline: "none" }}>
                  <div className={styles.header}>
                    <span>{item}</span>
                    <i className="fas fa-chevron-down"></i>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <AccordionItem><AccordionItemHeading>
                    <AccordionItemButton style={{ outline: "none" }}>
                      
                        {data.subNavigation.slice(0,1).map(item=>(<div className={styles.subHeader}>
                           <span>{item}</span>
                        <i className="fas fa-chevron-down"></i>
                         </div>)
                          )}
                       
                     
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className={styles.baseItem}>
                      {data.baseNavItems.map(item=>(
                        <span>{item}</span>
                      ))}
                      
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </AccordionItemPanel>
              <AccordionItemPanel>
                {data.subNavigation.slice(1,3).map(item=>(
                   <div className={styles.subHeader}>
                  <span>{item}</span>
                  <i className="fas fa-chevron-down"></i>
                </div>
                ))}
               
              </AccordionItemPanel>
              
            </AccordionItem>
              )
            )}
            
           
              {data.navigation.slice(2,6).map(item=>(
                <div className={styles.header}>
              <span>{item}</span>
            </div>
              ))}    
            
            
          </div>
        </Accordion>
      </div>
    </React.Fragment>
  );
};

export default menuSidebar;
