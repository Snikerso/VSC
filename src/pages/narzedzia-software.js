import React from "react"
import Layout from "../components/layout"
import { StaticQuery } from 'gatsby'
import ItemSofthard from '../components/ItemSoftHard'





const SoftWarePage = () => {


  return (
    <Layout>
      <StaticQuery
        query={graphql`
    query{
      persons {
        softwares {
          title
          id
          description
          descriptionMore

          photo{
            url
          }
        }
      }
    }
    `}
        render={({ persons: { softwares } }) => {
          // Tworzenie persons z falsem 



          return (
            <div className="narzedzia">
              <div className="title-page-contener-hardware">
                <div className="line-left"></div>
                <div className="title-page">SOFTWARE</div>
                <div className="line-right"></div>
              </div>

              <ItemSofthard
                softwares={softwares}
              />

            </div>
          )
        }}

      />

    </Layout>
  )

}

export default SoftWarePage
