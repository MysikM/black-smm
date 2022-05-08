import './App.scss';
import Navbar from "./components/NavBar/Navbar";
import Home from "./sections/Home/Home";
import School from "./sections/School/School";
import Service from "./sections/Service/Service";
import Portfolio from "./sections/Portfolio/Portfolio";
import Case from "./sections/Case/Case";
import Team from "./sections/Team/Team";
import Feedback from "./sections/Feedback/Feedback";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import ContactLinks from "./components/ContactLinks/ContactLinks";
import {useContext} from "react";
import {ModalStatusContext} from "./context/modalContext";

function App() {
    const {isOpenModal} = useContext(ModalStatusContext);
  return (
        <div className="App" style={{overflowY :`${isOpenModal ? 'hidden' : 'auto'}`, height: `${isOpenModal ? '100vh' : 'auto'}`}}>
            <Navbar />
            <Home />
            <School />
            <Service />
            <Portfolio />
            <Case />
            <Team />
            <Feedback />
            <Contact />
            <Footer />
            <ContactLinks />
        </div>
  );
}

export default App;
