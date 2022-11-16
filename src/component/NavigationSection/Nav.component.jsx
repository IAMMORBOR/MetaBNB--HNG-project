import { useState } from "react";
import Button from "../Button.componet";
import popUpImg1 from "../../Image-containner/image 66.png"
import logo1 from '../../Image-containner/logo1.png'
import logo2 from '../../Image-containner/logo2.png'
import DeskstopNav from "./DeskstopNav.component";
import MobileNav from "./MobileNav.component";

const Navigation= ()=>{
  const [OpenCommunity, setOpenCommunity]=useState(false);
  
  const OpenPopUp=()=>{
    setOpenCommunity(true)
  }
  const ClosePopUp=()=>{
    setOpenCommunity(false)
  }
 
    return(
        <div className="Nav-section">
          <div className="Nav-section--logo">
          <img className="Nav-section--logo--2" src={logo2} />
          <img className="Nav-section--logo--1" src={logo1} />
          </div>
         <DeskstopNav/>
         <MobileNav/>
       
      </div>
          
    )
   
}
export default Navigation;

