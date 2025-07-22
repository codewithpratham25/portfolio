import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";


export default function App(){
 return(
  <div>
    <Navbar />
    <Main />
    <About />
    <Footer />
  </div>
 ) 
}