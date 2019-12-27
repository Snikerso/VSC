import React from "react"
import Layout from "../components/layout"
import { StaticQuery } from 'gatsby'
import ItemBad from '../components/ItemBad'





const HardwarePage = () => {


  return (
    <Layout>
      <StaticQuery
        query={graphql`
    query{
      persons {
        badanias {
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
        render={({ persons: { badanias } }) => {
          // Tworzenie persons z falsem 



          return (
            <div className="narzedzia">
              <div className="title-page-contener-hardware">
                <div className="line-left"></div>
                <div className="title-page">  BADANIA</div>
                <div className="line-right"></div>
              </div>

              <ItemBad
                badanias={badanias}
              />

            </div>
          )
        }}

      />

    </Layout>
  )

}

export default HardwarePage
