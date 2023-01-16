import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onChangeTheme = () => {
        toggleTheme()
      }

      const navLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navThemeLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navItemsClass = isDarkTheme ? 'darkTheme' : 'lightTheme'
      const containerClass = isDarkTheme ? 'darkTheme' : 'lightTheme'

      const NavbarView = () => (
        <nav className={`header-container ${containerClass}`}>
          <img src={navLogoUrl} alt="website logo" className="logo" />
          <ul className="nav-container">
            <Link to="/" className={`link ${navItemsClass}`}>
              <li>
                <h1 className="home-nav">Home</h1>
              </li>
            </Link>
            <Link to="/about" className={`link ${navItemsClass}`}>
              <li>
                <h1 className="about-nav">About</h1>
              </li>
            </Link>
          </ul>
          <button
            type="button"
            className="theme-button"
            onClick={onChangeTheme}
            data-testid="theme"
          >
            <img src={navThemeLogo} alt="theme" className="theme" />
          </button>
        </nav>
      )

      return <>{NavbarView()}</>
    }}
  </ThemeContext.Consumer>
)

export default Navbar
