import './Navbar.css'
import './Navbar-MediaQuery.css'
import CodeX from "../../assets/CodeX.png"
import ActiveSidebar from "../../assets/ActiveSidebar.svg"
import CloseSidebar from "../../assets/CloseSidebar.svg"


const Navbar = () =>{
  return(
    <nav>
      <input type="checkbox" id='sidebar-active' />
      <label htmlFor="sidebar-active" className='open-sidebar-button'>
        <img src={ActiveSidebar} alt="sidebar-icon" className='img-size' />
      </label>
      <div className="navbar">
        <label htmlFor="sidebar-active" className='close-sidebar-button'>
          <img src={CloseSidebar} alt="" className='img-size'/>
        </label>
        <div className="navbar-left">
          <a href="#"><img src={CodeX} alt="" className="CodeX-logo" /></a>
        </div>
        <ul className='nav-list'>
          <a href="" className='list-links'><li>Home</li></a>
          <a href="" className='list-links'><li>About Me</li></a>
          <a href="" className='list-links'><li>Services</li></a>
          <a href="" className='list-links'><li>Contact</li></a>
        </ul>
        <div className="connect-with-me"><a href="">Connect With Me</a></div>
      </div>
    </nav>
  )
}

export default Navbar;