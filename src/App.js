import './App.scss';
import Navbar from "./components/NavBar/Navbar";
import Portal from "./components/Portal/Portal";
import CallMeModal from "./components/CallMeModal/CallMeModal";
import Home from "./sections/Home/Home";

function App() {

  return (
        <div className="App">
            <Navbar />
            <Home />
            <Portal>
                <CallMeModal />
            </Portal>
        </div>
  );
}

export default App;
