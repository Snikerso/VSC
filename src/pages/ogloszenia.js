import React from "react"
import Layout from "../components/layout"
import { StaticQuery } from 'gatsby'
import ItemAnnounce from '../components/ItemAnnounce'





const SoftWarePage = () => {


  return (
    <Layout>
      <StaticQuery
        query={graphql`
    query{
      persons {
        ogloszenias {
          title
          id
          description
          createdAt
          email
          name

        }
      }
    }
    `}
        render={({ persons: { ogloszenias } }) => {
          // Tworzenie persons z falsem 



          return (
            <div className="narzedzia">
              <div className="title-page-contener-hardware">
                <div className="line-left"></div>
                <div className="title-page">Ogłoszenia</div>
                <div className="line-right"></div>
              </div>

              <ItemAnnounce
                ogloszenias={ogloszenias}
              />

            </div>
          )
        }}

      />

    </Layout>
  )

}

export default SoftWarePage
