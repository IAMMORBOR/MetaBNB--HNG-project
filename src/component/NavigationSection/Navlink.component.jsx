import { Link} from "react-router-dom";
import { useState } from "react";
import Button from "../Button.componet";
import popUpImg1 from "../../Image-containner/image 66.png";
import popUpImg2 from "../../Image-containner/image 69.png";
import {GrFormNext} from "react-icons/gr";

const NavLink=()=>{
    const [OpenCommunity, setOpenCommunity]=useState(false);
  
    const OpenPopUp=()=>{
      setOpenCommunity(true)
    }
    const ClosePopUp=()=>{
      setOpenCommunity(false)
    }
   
    return(
       <>
        <nav className="Nav-section--Nav">
            <Link className='Nav-section--Nav_link'to='/'>
            Home
            </Link>
            <Link className='Nav-section--Nav_link'to='/place'>
              Place to stay
            </Link>
            <Link className='Nav-section--Nav_link'to='/nfts'>
               NFTs
            </Link>
            <Link className='Nav-section--Nav_link'to='/community'>
            Community
            </Link>
            <div className="Button-component">
            <Button
                handleclick={OpenPopUp}
                btntype="main">Connect wallet
            </Button>
      </div>
        </nav>
       
      {
      OpenCommunity? 
        <div className="popUp-section">
        <div className="popUp-section__heading">
          <h5 className="popUp-section__heading--text">
            Connect Wallet
          </h5>
          < div className='popUp-section--close' onClick={ClosePopUp}>
            X
          </div>
        </div>

        <div className="popUp-section--option">
        <label className="popUp-section--dropdown" htmlFor="connectWallet">
                  Choose your preferred wallet:
              </label><br/>
                    <div className="popUp-section--connectWallet">
                        <div className="popUp-section--selection">
                            <img src={popUpImg1} alt="popUp-image" className="popUp-section--img" />
                            Meta Mask
                        </div>
                        <GrFormNext className="popUp-section--icon"/>
                  </div>
                  <div className="popUp-section--connectWallet">
                      <div className="popUp-section--selection">
                        <img src={popUpImg2} alt="popUp-image" className="popUp-section--img"/>
                            WalletConnect
                      </div>
                        <GrFormNext className="popUp-section--icon" />
                  </div>
        </div>
    </div>
       : ''
        
    }
        </>
      
    )
}
export default NavLink;