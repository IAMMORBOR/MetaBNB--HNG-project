import {Routes, Route } from "react-router-dom";
import Navigation from "./component/NavigationSection/Nav.component";
import Community from "./component/Community.component";
import Place from "./component/place.component";
import Home from "./component/Home.component";
import Nfts from "./component/NFTs.component";





function App() {
 

  return (
    <div className="Main-section">
      <Navigation/>
      <Routes>
          <Route index element ={<Home/>}/>
          <Route path='/place' element ={ <Place/>} />
          <Route path='/nfts' element ={ <Nfts/>} />
          <Route path='/community' element ={ <Community/>} />
      </Routes> 
    </div>
   
  );
}

export default App;
