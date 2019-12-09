import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const OprogramowaniePage = () => {

  return (
    <Layout>
      <div className="title-page-contener-hardware">
        <div className="line-left"></div>
        <div className="title-page">NARZĘDZIA</div>
        <div className="line-right"></div>
      </div>

      <div className="hardware-software">
        <div>
        <h2 className="narzedzia-link">Hardware</h2>
          <Link to="/narzedzia-hardware">

            <div className="hardware-menu" style={{ backgroundImage: `url(${require('../images/hardware.jpg')})` }}>

            </div>
          </Link>
        </div>
        <div>
          <h2 className="narzedzia-link">Software</h2>
          <Link to="/narzedzia-software">
            <div className="software-menu" style={{ backgroundImage: `url(${require('../images/hardware.jpg')})` }}>
            </div>
          </Link>
        </div>
      </div>

    </Layout>
  )
}

export default OprogramowaniePage
