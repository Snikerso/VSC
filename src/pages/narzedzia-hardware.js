import React from "react"
import Layout from "../components/layout"
import { StaticQuery } from 'gatsby'
import ItemHard from '../components/ItemHard'


const HardwarePage = () => {


  return (
    <Layout>
      <StaticQuery
        query={graphql`
    query{
      persons {
        hardwares {
          id
          title
          description
          descriptionMore

          photo{
            url
          }
        }
      }
    }
    `}
        render={({ persons: { hardwares } }) => {
          // Tworzenie persons z falsem 



          return (
            <div className="narzedzia">
              <div className="title-page-contener-hardware">
                <div className="line-left"></div>
                <div className="title-page">HARDWARE</div>
                <div className="line-right"></div>
              </div>

              <ItemHard
                hardwares={hardwares}
              />

            </div>
          )
        }}

      />

    </Layout>
  )

}

export default HardwarePage
