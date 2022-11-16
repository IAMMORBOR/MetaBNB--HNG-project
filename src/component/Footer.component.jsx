import LogoWhite from "../Image-containner/logo-white(1).png"
import LogoWhite2 from "../Image-containner/logo-white(2).png"
import {BsTwitter} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {FaFacebookF} from 'react-icons/fa';
import {MdOutlineCopyright} from 'react-icons/md';


const Footer=()=>{
    return(
        <footer className="footer-section">
        <div className="footer-section--containner">
            <div className="footer-section--logo">
            <img className="footer-section--logo__img1" src={LogoWhite} alt="Logo"/>
            <img className="footer-section--logo__img2" src={LogoWhite2} alt="Logo"/>
            </div>
            <div className="footer-section--content">
                <h6 className="footer-section--header">
                        Community
                </h6>
                <ul  className='footer-section__ul'>
                    <li className="footer-section--list">
                        NFTs
                    </li>
                    <li className="footer-section--list">
                        Token
                    </li>
                    <li className="footer-section--list">
                        Landlord
                    </li>
                    <li className="footer-section--list">
                        Discord
                    </li>
                </ul>
            </div>
            <div className="footer-section--content">
                <h6 className="footer-section--header">
                        Place
                </h6>
                <ul className="footer-section__ul">
                    <li className="footer-section--list">
                        Castle
                    </li>
                    <li className="footer-section--list">
                        Frame
                    </li>
                    <li className="footer-section--list">
                        Beach
                    </li>
                    <li className="footer-section--list">
                        Learn More
                    </li>
                </ul>
            </div>
            <div className="footer-section--content">
                <h6 className="footer-section--header">
                        About us
                </h6>
                <ul className='footer-section__ul'>
                    <li className="footer-section--list">
                        Road Map
                    </li>
                    <li className="footer-section--list">
                        Creators
                    </li>
                    <li className="footer-section--list">
                        Career
                    </li>
                    <li className="footer-section--list">
                        Contact us
                    </li>
                </ul>
            </div>
        </div>
        <div className="footer-section--social__containner">
            <div className="footer-section--social">
                <FaFacebookF className='footer-section--Icon' />
                <BsTwitter className='footer-section--Icon' />
                <AiFillInstagram className='footer-section--Icon' />
            </div>
            <div className="footer-section--copyRight">
                <MdOutlineCopyright className="footer-section--copyRight__Icon"/>
                <div className="footer-section--copyRight__text">
                2022 Metabnb
                </div>
            </div>
        </div>

    </footer>
    )

}
export default Footer;