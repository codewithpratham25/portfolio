import './Navbar.css'
import CodeX from "../../assets/CodeX.png"

const Navbar = () =>{
  return(
    <nav>
    <div className="navbar">
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