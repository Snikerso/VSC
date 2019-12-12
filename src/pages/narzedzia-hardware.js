import React from "react"
import Layout from "../components/layout"
import { StaticQuery } from 'gatsby'


const HardwarePage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
    query{
      persons {
        hardwares {
          description
          descriptionMore
          title
          photo{
            url
          }
        }
      }
    }
    `}
      render={({ persons: { hardwares } }) => (
        <div className="narzedzia">
          {hardwares.map(function (item, i) {
            return (
              <div className="badania-contener">
                
                <div className="badania-text-image">
                  <div className="badania-narzedzia-image" style={{ backgroundImage: `url(${item.photo.url})` }}></div>
                  <div className="badania-text">
                  <h3 className="badania-title">{item.title}</h3>
                    {item.description}
                    <div className="badania-more">Więcej</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      )}

    />

  </Layout>
)

export default HardwarePage
