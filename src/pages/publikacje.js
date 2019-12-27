import React from "react"
import Layout from "../components/layout"
import { StaticQuery } from "gatsby"


const ReactMarkdown = require('react-markdown/with-html')


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
          publications     
        }
      }
    }
    `}
      render={({ persons: { publicationses } }) => (
        <div class="csl-bib-body" style={{ lineheight: 30, marginleft: '2em', textindent: '-2em' }}>
          {publicationses.map(function (item, i) {
            return (


              <ReactMarkdown
                source={item.publications}
                escapeHtml={false}

              />

            )
          })}
        </div>
      )}
    />
  </Layout>
)

export default PublicationPage
