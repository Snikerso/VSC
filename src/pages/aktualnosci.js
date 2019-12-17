import React, { useState } from "react"
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
              <h4>{item.node.context.data.title}</h4>
              <div style={{ color: "#39C8DF" }}>08.12.2019</div>
              <div style={{ justifySelf: 'left' }} className="news-text">
                cmad c dam ammadmdamaa mm amdmadma  ma am mammdam am,a mam  ma ma
              </div>


              <Link to={item.node.context.data.slug}  className="badania-more" >Więcej</Link>

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
          }
        }
      }
    }
  }
}


`



export default AktualnosciPage

