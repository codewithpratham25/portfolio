import "./Main.css"
import { ReactTyped } from "react-typed";
import My from "../../assets/My.png";

const Main = () =>{
  return (
    <div className="main-content">
      <img src={My} alt="Profile Pic" className="profile-pic" />
      <div className="wlecome-text">
        <h1 className="main-content-head"><span>Hey I am Prathamesh</span> and Welcome To <div><ReactTyped strings={["CodeX.dev"]} typeSpeed={60} className="react-typed-CodeX"/></div></h1>
        <h2 className="main-content-head-h2">I am a <ReactTyped strings={["Student.","Code Enthusiast.","Web Developer."]} typeSpeed={60} className="react-typed"/></h2>
        <br />
      </div>
      <div className="buttons">
        <div className="connect"><a href="connect">Connect With Me</a></div>
        <div className="resume"><a href="resume">Resume</a></div>
      </div>
    </div>
  )
}

export default Main;