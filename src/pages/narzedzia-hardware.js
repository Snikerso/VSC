import React from "react"
import Layout from "../components/layout"
import { StaticQuery } from 'gatsby'


const HardwarePage = () => (
  <Layout>
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
        <div className="hardware">
          {osobies.map(function (item, i) {
            if (i % 2) {
              return (
                <div className="hardware-container-text-img"  >
                  <div className="hardware-container-text">{item.opis}</div>
                  <div className="hardware-container-img" style={{ backgroundImage: `url(${item.zdjecie.url})` }} ></div>
                </div>
              )
            } else {
              return (

                <div className="hardware-container-text-img"  >
                  <div className="hardware-container-img" style={{ backgroundImage: `url(${item.zdjecie.url})` }} ></div>
                  <div className="hardware-container-text">{item.opis}</div>
                </div>
              )
            }
          })}
        </div>

      )}

    />

  </Layout>
)

export default HardwarePage
