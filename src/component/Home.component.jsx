import Button from "./Button.componet";
import Footer from "./Footer.component";
import img1 from "../Image-containner/section1--img1.png";
import img2 from "../Image-containner/section1--img2.png";
import img3 from "../Image-containner/section1--img3.png";
import img4 from "../Image-containner/section1--img4.png";
import img5 from "../Image-containner/image 9.png";
import img6 from "../Image-containner/image 8.png";
import img7 from "../Image-containner/image 7.png";
import frame from "../Image-containner/frame.png";
import DATA from "../DATA/Data";


const Home = ()=>{

    return(
        <>
        <section className="Home-section">
            <div className="Home-section--banner">
                <h1 className="Home-section--heroText">
                    Rent a <span className="Home-section--heroText__span">Place</span> away from <span className="Home-section--heroText__span">Home
                    </span> in the<span className="Home-section--heroText__span"> Metaverse</span>
               </h1>
               <p className="Home-section--SubText">
                    we provide you access to luxury and affordable houses in the metaverse, 
                    get a chance to turn your imagination to reality at your comfort zone
               </p>
               <div className="Home-section--search__section">
                    <input className="Home-section--input" placeholder="Search for location"/>
                    <Button btntype="search">Search</Button>
               </div>
            </div>
            <div className="Home-section--main2">
                <div className="Home-section--main2__class1">
                    <img className="Home-section--main2__img" src={img1} />
                    <img className="Home-section--main2__img" src={img3} />
                </div>
                <div className='Home-section--main2__class2'>
                    <img className="Home-section--main2__img" src={img2} />
                    <img className="Home-section--main2__img" src={img4} />
                </div>
            </div>
            <div className="Home-section--main2__mobile">
                <img className="Home-section--main2__img" src={img1} />
                <img className="Home-section--main2__img" src={img3} />
                <img className="Home-section--main2__img" src={img2} />
                <img className="Home-section--main2__img" src={img4} />
            </div>
        </section>
        <section className="Home-section2">
         <img className="Home-section2--frame" src={frame} />
        </section>
        <section className="Home-section3">
            <h3 className="Home-section3__text">
            Inspiration for your next adventure
            </h3>
            <div className="data-section">
                {DATA.map((ImageData)=>{
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
                           <div className="rating-section">
                                <img className="data-section--rating" src={ImageData.Rating} alt='rating-Stars' />
                                <img className="data-section--rating" src={ImageData.Rating} alt='rating-Stars' />
                                <img className="data-section--rating" src={ImageData.Rating} alt='rating-Stars' />
                                <img className="data-section--rating" src={ImageData.Rating} alt='rating-Stars' />
                                <img className="data-section--rating" src={ImageData.Rating} alt='rating-Stars' />
                           </div>
                        </div>
                    )

                })}
            </div>
        </section>
        <section className="Home-section4">
            <div className="Home-section4--textArea">
                <h3 className="Home-section4--heading">
                    Metabnb NFTs
                </h3>
                <p className="Home-section4--text">
                    Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                </p>
                <Button btntype="btnPrimary">Learn more</Button>
            </div>
            <div className="Home-section4--imgArea">
                <img className="Home-section4__img9" src={img5} alt="Images"/>
                <img className="Home-section4__img8" src={img6} alt="Images"/>
                <img className="Home-section4__img7" src={img7} alt="Images"/>
           

            </div>
        </section>
        <Footer/>
        </>
          
    )
};
export default Home;