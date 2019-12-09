import React from "react"
import Layout from "../components/layout"
import { StaticQuery } from "gatsby"


const publications = [
  { id: 1, authors: "Ciechalska, D. i Gut, M. (2018).", title: "Komputerowe versus papierowe narzędzia oceny umiejętności matematycznych dzieci." },


]
const PublicationPage = () => (
  <Layout>
    <div className="title-page-contener">
      <div className="line-left"></div>
      <div className="title-page">PUBLIKACJE</div>
      <div className="line-right"></div>
    </div>
    <StaticQuery
      query={graphql`
    query{
      persons {
        publicationses {
          id
          title
          publicationContent
          
        }
      }
    }
    `}
      render={({ persons: { publicationses } }) => (
        <div className="publications">
          {publicationses.map(function (item, i) {

            return (
              <div>
                <div>{item.publicationContent}</div>
              </div>
            )
          })}
        </div>

      )}

    />

  </Layout>
)

export default PublicationPage
