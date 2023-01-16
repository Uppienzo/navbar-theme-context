import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutBodyImagUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const aboutContainerClassName = isDarkTheme ? 'Dark-theme' : 'light-theme'
      const aboutHeadClassName = isDarkTheme ? 'Dark-theme' : 'light-theme'

      const homeView = () => (
        <div className={`about-container ${aboutContainerClassName}`}>
          <Navbar />
          <div className="about-body">
            <img src={aboutBodyImagUrl} alt="about" className="home-image" />
            <h1 className={`home-head ${aboutHeadClassName}`}>Home</h1>
          </div>
        </div>
      )

      return <>{homeView()}</>
    }}
  </ThemeContext.Consumer>
)

export default Home
