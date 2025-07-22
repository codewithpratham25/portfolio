import "./Footer.css"
import { SocialIcon } from "react-social-icons";

const Footer = () =>{
  return(
    <div>
      <div className="footer">
        <h3>Follow Me On <SocialIcon url="https://www.instagram.com/code.pratham.exe/" className="space"></SocialIcon> <SocialIcon url="https://x.com/Pheonixx077" className="space"></SocialIcon> <SocialIcon url="https://github.com/codewithpratham25" className="space"></SocialIcon> <SocialIcon url="https://www.reddit.com/user/Prestigious-Stick729/" className="space"></SocialIcon> <SocialIcon url="https://www.linkedin.com/in/mangnale-prathamesh-4bb342376/" className="space"></SocialIcon></h3>
      </div>
      <div className="copyright-container">
        <h3>&copy; CodeX.dev | All Rights Reserved | 2025 | <span>&#x1f1ee;&#x1f1f3;</span></h3>
      </div>
    </div>
  )
};

export default Footer;