import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // to be able to navigate from pages to pages using search bar
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Upload from "./pages/Upload";
import SuccessUpload from "./pages/SuccessUpload";
import Alien from "./pages/Alien";
import Abgirl from "./pages/Abgirl";
import Moman from "./pages/Moman";
import Mosque from "./pages/Mosque";
import Little from "./pages/Little";
import Crystal from "./pages/Crystal";
import Jawood from "./pages/Jawood";
import Rico from "./pages/Rico";
import Reflexo from "./pages/Reflexo";
import Tigro from "./pages/Tigro";
import Milkyway from "./pages/Milkyway";
import Lalibela from "./pages/ImagePage";
import Squerrie from "./pages/Squerrie";
import Baloo from "./pages/Baloo";
import Lava from "./pages/Lava";
import LalibelaAddress from "./pages/LalibelaAddress";
import MosqeAddress from "./pages/MosqeAddress";
import PurchaseSuccess from "./pages/PurchaseSuccess";
import Offer from "./pages/Offer";
import PersonalInfo from "./pages/PersonalInfo";
import ContactSubmit from "./pages/ContactSubmit";
import ImageUpload from "./ImageUpload";
import ImagePage from ".pages/ImagePage";

// Router - if we want to add different pages to our app
// Switch - to tell out Route that we only want to render one route at each time
// exact - assures that we don't want to play multiple routes at a time
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/explore' exact Component={Explore} />
          <Route path='/about' exact Component={About} />
          <Route path='/contact' exact Component={Contact} />
          <Route path='/help' exact Component={Help} />
          <Route path='/imagePage' exact Component={ImagePage} />

          <Route path='/upload' exact Component={Upload} />
          <Route path='/successUpload' exact Component={SuccessUpload} />
          <Route path='/alien' exact Component={Alien} />
          <Route path='/abgirl' exact Component={Abgirl} />
          <Route path='/moman' exact Component={Moman} />
          <Route path='/mosque' exact Component={Mosque} />
          <Route path='/little' exact Component={Little} />
          <Route path='/crystal' exact Component={Crystal} />
          <Route path='/jawood' exact Component={Jawood} />
          <Route path='/rico' exact Component={Rico} />
          <Route path='/reflexo' exact Component={Reflexo} />
          <Route path='/tigro' exact Component={Tigro} />
          <Route path='/milkyway' exact Component={Milkyway} />
          <Route path='/lalibela' exact Component={Lalibela} />
          <Route path='/squerrie' exact Component={Squerrie} />
          <Route path='/baloo' exact Component={Baloo} />
          <Route path='/lava' exact Component={Lava} />
          <Route path='/mosqueAddress' exact Component={MosqeAddress} />
          <Route path='/lalibelaAddress' exact Component={LalibelaAddress} />
          <Route path='/offer' exact Component={Offer} />
          <Route path='/purchaseSuccess' exact Component={PurchaseSuccess} />
          <Route path='/personalInfo' exact Component={PersonalInfo} />
          <Route path='/contactSubmit' exact Component={ContactSubmit} />
        </Routes>
        <ImageUpload />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
