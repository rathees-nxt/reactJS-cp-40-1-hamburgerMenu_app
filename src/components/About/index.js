// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="image-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
        className="about-sm-img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="about-lg-img"
      />
    </div>
  </div>
)

export default About
