import React,{useState} from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from 'react-accessible-accordion';

const CheckoutCoupon = () => {

   
    
    
      const setExpand=(index)=>e=>{
         let temp=[...FAQS]
         temp[index].expanded= !temp[index].expanded
         setFAQS(temp)
      }

    return(
        <div className="coupon-accordion">

<Accordion allowZeroExpanded  className="accodion-style--1" >
        
        <AccordionItem onClick={setExpand}   >
            <AccordionItemHeading>
             
              <AccordionItemButton  >  <h3>Returning customer? <span id="showlogin">Click here to login</span></h3></AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
            <div id="checkout-login" className="coupon-content">
                        <div className="coupon-info">
                            <p className="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est
                                sit amet ipsum luctus.</p>
                            <form action="#">
                                <p className="form-row-first">
                                    <label>Username or email <span className="required">*</span></label>
                                    <input type="text" />
                                </p>
                                <p className="form-row-last">
                                    <label>Password <span className="required">*</span></label>
                                    <input type="text" />
                                </p>
                                <p className="form-row">
                                    <button className="e-btn e-btn-border" type="submit">Login</button>
                                    <label>
                                        <input type="checkbox" />
                                        Remember me
                                    </label>
                                </p>
                                <p className="lost-password">
                                    <a href="#">Lost your password?</a>
                                </p>
                            </form>
                        </div>
                    </div>
            </AccordionItemPanel>
          </AccordionItem>
        
    </Accordion>




            
    




        </div>
    )
}

export default CheckoutCoupon;





