import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutBodyImagUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutContainerClassName = isDarkTheme ? 'Dark-theme' : 'light-theme'
      const aboutHeadClassName = isDarkTheme ? 'Dark-theme' : 'light-theme'

      const aboutView = () => (
        <div className={`about-container ${aboutContainerClassName}`}>
          <Navbar />
          <div className="about-body">
            <img src={aboutBodyImagUrl} alt="about" className="home-image" />
            <h1 className={`home-head ${aboutHeadClassName}`}>About</h1>
          </div>
        </div>
      )

      return <>{aboutView()}</>
    }}
  </ThemeContext.Consumer>
)

export default About
