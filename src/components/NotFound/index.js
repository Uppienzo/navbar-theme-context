import './index.css'
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const containerClassName = isDarkTheme ? 'dark-theme' : 'light-theme'
      const notFoundBodyClassName = isDarkTheme ? 'dark-theme' : 'light-theme'
      const headClassName = isDarkTheme ? 'dark-head' : 'light-head'

      const notFoundView = () => (
        <div className={`not-found-container ${containerClassName}`}>
          <Navbar />
          <div className={`not-found-body ${notFoundBodyClassName}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className={`not-found-head ${headClassName}`}>Lost You Way?</h1>
            <p className="not-found-description">
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )

      return <>{notFoundView()}</>
    }}
  </ThemeContext.Consumer>
)

export default NotFound
