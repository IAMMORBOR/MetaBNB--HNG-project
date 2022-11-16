import Button from "./Button.componet";
import { Link} from "react-router-dom";
import {GoSettings} from "react-icons/go";
import PlaceData from "../DATA/PlaceData";
import Footer from "./Footer.component";

const Place=()=>{
    return(
        <>
       <section className="Place-section">
            <nav className="Place-section__nav">
                <ul className="Place-section__ul">
                    <Link className="Place-section--link">
                        <li className="Place-section__li" key="1">
                            Resturant
                        </li>
                    </Link>
                    <Link className="Place-section--link">
                        <li className="Place-section__li" key="2">
                            Cottage
                        </li>
                    </Link>
                    <Link className="Place-section--link">
                        <li className="Place-section__li" key="3">
                            Castle
                        </li>
                    </Link>
                    <Link className="Place-section--link">
                        <li className="Place-section__li" key="4">
                            Fantast City
                        </li>
                    </Link>
                    <Link className="Place-section--link">
                        <li className="Place-section__li" key="5">
                            Beach
                        </li>
                    </Link>
                    <Link className="Place-section--link">
                        <li className="Place-section__li" key="6">
                            Carbins
                        </li>
                    </Link>
                    <Link className="Place-section--link">
                        <li className="Place-section__li" key="7">
                            off-grid
                        </li>
                    </Link>
                    <Link className="Place-section--link">
                        <li className="Place-section__li" key="8">
                        Farm
                        </li>
                    </Link>
                    <Button btntype="btnLocation" className="Place-section__btn">
                        Location
                        <GoSettings className="Place-section--icon"/>
                    </Button>
                </ul> 
            </nav>

            <div className="data-section">
                {PlaceData.map((ImageData)=>{
                    return(
                        <div className="data-section--containner" key={ImageData.key}>
                            <div className="Home-section--imageContainer">
                                <img src={ImageData.Image} alt='images' className="data-section--img"></img>
                            </div>
                           <div className="data-section--info">
                                <div className="data-section--info-1">
                                    <div className="data-section--name">{ImageData.Name}</div>
                                    <div className="data-section--amount">{ImageData.Amount}</div>
                                </div>
                                <div className="data-section--info-2">
                                    <div className="data-section--distance">{ImageData.Distance}</div>
                                    <div className="data-section--duration">{ImageData.Duration}</div>
                                </div>
                           </div>
                           <img className="data-section--rating" src={ImageData.Rating} alt='rating-Stars' />
                           <img className="data-section--rating" src={ImageData.Rating} alt='rating-Stars' />
                           <img className="data-section--rating" src={ImageData.Rating} alt='rating-Stars' />
                           <img className="data-section--rating" src={ImageData.Rating} alt='rating-Stars' />
                           <img className="data-section--rating" src={ImageData.Rating} alt='rating-Stars' />
                           
                        </div>
                    )

                })}
            </div>
          
       </section>
       <Footer/>
       </>
    )
}
export default Place;