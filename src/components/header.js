import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/log-vs.png"
import Navigation from './navigation-bar'
const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundColor: 'white',
      textAlign: 'center',
      fontColor: 'black'

    }}
  >
    <div className="head"
      style={{
        margin: `0 auto`,
        maxWidth: 960,

      }}
    >
      <figure>
        <img className="logo" src={logo} ></img>
      </figure>
      <div style={{ margin: 0, color: 'black' }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          Visual Spatial Cognition
        </Link>
      </div>
      <Navigation />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
