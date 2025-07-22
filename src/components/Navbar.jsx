import './Navbar/Navbar.css'

const Navbar = () =>{
  return(
    <nav>
    <div className="navbar">
      <div className="navbar-left">
        <a href="#"><img src="src/assets/CodeX-Newlogo.svg" alt="" className="CodeX-logo" /></a>
      </div>
      <ul className='nav-list'>
        <a href="" className='list-links'><li>Home</li></a>
        <a href="" className='list-links'><li>About Me</li></a>
        <a href="" className='list-links'><li>Services</li></a>
        <a href="" className='list-links'><li>Contact</li></a>
      </ul>
      <div className="connect-with-me">Connect With Me</div>
    </div>
  </nav>
  )
}

export default Navbar;