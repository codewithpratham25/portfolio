import "./About.css"


const About = () =>{
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src="./src/assets/My-Abt.jpg" alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Hey there! 👋 I'm Mangnale Prathamesh and I am Class 12th Passout from Army Public School, Bolarum. I am a passionate Student and aspiring developer with a lots of love for Coding, creating user-friendly interactive websites. My Aim is to become Full Stack Developer</p>
            <p>My expertise include HTML , CSS & JavaScript. I also have a basic understanding of React.Js and intermediate skills in Python </p>
          </div>

          <div className="about-skills">
            <div className="about-skill"><p>HTML</p><hr style={{width:"80%"}}/></div>
            <div className="about-skill"><p>CSS</p><hr style={{width:"85%"}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"80%"}}/></div>
            <div className="about-skill"><p>React.Js</p><hr style={{width:"45%"}}/></div>
            <div className="about-skill"><p>Python</p><hr style={{width:"65%"}}/></div>
          </div>
        </div>
      </div>

      
    </div>
  )
};

export default About;