import NavLink from './Navlink.component'
import {HiMenuAlt3}from 'react-icons/hi';
import{RiCloseFill}from 'react-icons/ri';
import { useState } from "react";


const MobileNav=()=>{

    const [Open, SetOpen] = useState(false);

    const OpenMenu = <HiMenuAlt3 className="Hamburger-menu"
        size='40px' color="#fff" onClick={() => {
            SetOpen(!Open)
        }} />
    const CloseMenu = <RiCloseFill className="Hamburger-menu"
        size='40px' color="#fff" onClick={() => {
            SetOpen(!Open)
        }} />

    const CloseMobileNavMenu = () => {
        SetOpen(false)
    }

    return (
        <div className="MobileNav">
            {Open ? CloseMenu : OpenMenu}
            {Open && <NavLink isMobileNav={OpenMenu} CloseMobileNavMenu={CloseMobileNavMenu} />}
          
        </div>
      

    )
 
}
export default MobileNav;