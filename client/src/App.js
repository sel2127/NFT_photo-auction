import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // to be able to navigate from pages to pages using search bar
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import SuccessUpload from "./pages/SuccessUpload";
import Lalibela from "./pages/ImagePage";
import LalibelaAddress from "./pages/LalibelaAddress";
import PurchaseSuccess from "./pages/PurchaseSuccess";
import PersonalInfo from "./pages/PersonalInfo";
import ContactSubmit from "./pages/ContactSubmit";
import ImageUpload from "./ImageUpload";

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
          <Route path='/upload' exact Component={ImageUpload} />
          <Route path='/successUpload' exact Component={SuccessUpload} />
          <Route path='/detail/:id' exact Component={Lalibela} />
          <Route path='/personalInfo' exact Component={PersonalInfo} />
          <Route path='/contactSubmit' exact Component={ContactSubmit} />
          <Route path='/lalibelaAddress' exact Component={LalibelaAddress} />
          <Route path='/purchaseSeccess' exact Component={PurchaseSuccess} />



        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
