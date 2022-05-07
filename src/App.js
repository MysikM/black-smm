import './App.scss';
import Navbar from "./components/NavBar/Navbar";
import Portal from "./components/Portal/Portal";
import CallMeModal from "./components/CallMeModal/CallMeModal";
import Home from "./sections/Home/Home";
import School from "./sections/School/School";
import Service from "./sections/Service/Service";
import Portfolio from "./sections/Portfolio/Portfolio";
import Case from "./sections/Case/Case";

function App() {

  return (
        <div className="App">
            <Navbar />
            <Home />
            <School />
            <Service />
            <Portfolio />
            <Case />
            <Portal>
                <CallMeModal />
            </Portal>
        </div>
  );
}

export default App;
