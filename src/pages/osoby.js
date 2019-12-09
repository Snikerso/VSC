import React from "react"
import Layout from "../components/layout"
import { StaticQuery } from "gatsby"


const Osoby = () => (
  <StaticQuery
    query={graphql`
    query{
      persons {
        osobies {
          id
          name
          opis
          zdjecie {
            id
            url
          }
        }
      }
    }
    `}
    render={({ persons: { osobies } }) => (
      <div className="persons">
        {osobies.map(function (item, i) {

          return (

            <div className="person-container-text-img"  >

              <div className="person-container-img" style={{ backgroundImage: `url(${item.zdjecie.url})` }} ></div>
              <div className="person-container-text">
                <div> <b>{item.opis}</b></div>
                <div>jdisaojdisaj odj asiojd ai jdoi ajiwdoaijwidj aod jaiw jaoi djwia jw i glr hshg lijqpo hglkw nkfj ioh oh</div>
                <div>email: snikersdro@gmail.com</div>
              </div>


            </div>
          )
        }
        )}
      </div>

    )
    }

  />
)


const OsobyPage = () => (
  <Layout>
    <div className="title-page-contener">
      <div className="line-left"></div>
      <div className="title-page">OSOBY</div>
      <div className="line-right"></div>
    </div>




    <Osoby />
  </Layout>
)

export default OsobyPage
