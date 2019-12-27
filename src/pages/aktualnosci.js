import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"


const AktualnosciPage = ({
  data: {
    allSitePage: { edges },
  },
}) => {

  return (
    <Layout>

      <div className="title-page-contener">
        <div className="line-left"></div>
        <div className="title-page">AKTUALNOŚCI</div>
        <div className="line-right"></div>
      </div>
      {edges.map(item => {

        return (
          <div className="news-contener">
            <div className="news-card">
              <div className="announce-head-data">
                <h4>{item.node.context.data.title}</h4>
                <div className="announce-data" style={{ color: "#39C8DF" }}>{item.node.context.data.data.substring(0, 10)}</div>
              </div>
              <div className="news-image-text">
                <div style={{ justifySelf: 'left' }} className="news-text">
                  {item.node.context.data.content}
                  <Link to={item.node.context.data.slug} className="news-more" >Więcej...</Link>

                </div>

                <div className="news-image" style={{ backgroundImage: `url(${item.node.context.data.photo.url})` }}></div>

              </div>



             
            </div>
          </div >

        )
      })}

    </Layout>
  )
}

export const allPostPagesQuery = graphql`
{
  allSitePage(filter: {isCreatedByStatefulCreatePages: {eq: false}}) {
    edges {
      node {
        id
        path
        context {
          data {
            slug
            title
            
            content
            cnjdsn
            data
            photo{
              url
            }
          }
        }
      }
    }
  }
}


`



export default AktualnosciPage

