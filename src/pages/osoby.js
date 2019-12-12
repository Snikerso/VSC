import React from "react"
import Layout from "../components/layout"
import { StaticQuery } from "gatsby"
import { MdLanguage } from 'react-icons/md'

const Osoby = () => (
  <StaticQuery
    query={graphql`
    query{
      persons {
        osobies {
          id
          name
          description
          photo {
            id
            url
          }
        }
      }
    }
    `}
    render={({ persons: { osobies } }) => (
      <div className="persons">
        {osobies.map(function (item, i) {

          return (

            <div className="person-container-text-img"  >
              <div className="person-container-img" style={{ backgroundImage: `url(${item.photo.url})` }} ></div>
              <div className="person-container-text">
                <div className="person-container-head"><b>{item.name}</b></div>
                <div>{item.description}</div>
                <div>email: snikersdro@gmail.com</div>
                <div ><a className="person-container-email" href="https://www.w3schools.com" target="__blank">Strona osobista: <MdLanguage /></a></div>
              </div>


            </div>
          )
        }
        )}
      </div>
    )
    }
  />
)
const OsobyPage = () => (
  <Layout>
    <div className="title-page-contener">
      <div className="line-left"></div>
      <div className="title-page">OSOBY</div>
      <div className="line-right"></div>
    </div>
    <Osoby />
  </Layout>
)

export default OsobyPage
