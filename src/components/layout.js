import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Navigation from './navigation'
import "./layout.css"


// 1. Zmniejczyc czcionke footera
// 2. odległosci kresek headerów
// 3. hardware software obramowanie radius
// odleglos tytulu od zdjecia badania...
// Zmniejszyc odleglosci miedzy koncem telefonu  a komórką


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="main">
        <Header siteTitle={data.site.siteMetadata.title} />

        <Navigation />

        <main>{children}
          <div className="title-page-contener footer-lines">
            <div className="line-left"></div>
            <div className="title-page"></div>
            <div className="line-right"></div>
          </div>
          <footer>
            <div>
              <h3>Kontakt</h3>
              <p>Email: mathcoglab@umk.pl</p>
              <p>nr: mathcoglab@umk.pl</p>
            </div>
            <div>
              <h3>Adres</h3>
              <p>ICNT na gagarina</p>
              <p>ul. Gagarina</p>
              <p>87-100 Toruń</p>
            </div>
          </footer>
        </main>


      </div>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
