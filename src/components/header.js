import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../images/logoo.png"
import { MdMenu } from 'react-icons/md';


const Header = ({ siteTitle }) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
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
          <Link to="/">
            <figure>

              <img className="logo" src={logo} ></img>

            </figure>
          </Link>
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
          < nav className={"nav-mobile"}  >
            <div className="nav-mobile-bar" onClick={() => setNavOpen(!navOpen)}><MdMenu /></div>
            <ol className={navOpen ? "nav-mobile-active" : "nav-mobile-unactive"} >

              <div className="nav-mobile-bar-delete" onClick={() => setNavOpen(!navOpen)}>x</div>

              <Link className="nav-li" to="/">
                <div className="nav-li-name">O NAS</div>
              </Link>
              <Link className="nav-li" to="/osoby">
                <div className="nav-li-name">OSOBY</div>
              </Link>
              <Link className="nav-li" to="/publikacje">
                <div className="nav-li-name">PUBLIKACJE</div>
              </Link>
              <Link className="nav-li" to="/badania">
                <div className="nav-li-name">BADANIA</div>
              </Link>
              <Link className="nav-li" to="/oprogramowanie">
                <div className="nav-li-name">SPRZĘT</div>
              </Link>
              <Link className="nav-li" to="/ogloszenia">
                <div className="nav-li-name">OGŁOSZENIA</div>
              </Link>
              <Link className="nav-li" to="/kalendarz">
                <div className="nav-li-name">KALENDARZ</div>
              </Link>
              <Link className="nav-li" to="/kontakt">
                <div className="nav-li-name">KONTAKT</div>
              </Link>
              <Link className="nav-li" to="/aktualnosci">
                <div className="nav-li-name">AKTUALNOŚCI</div>
              </Link>
            </ol>
          </nav >
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
