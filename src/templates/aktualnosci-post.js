import React from "react"
import ReactMarkdown from 'react-markdown'

import Layout from "../components/layout"


const AktualnosciTemplate = ({ pageContext: { data } }) => {

    return (

        <Layout>



            <div className="page-template">
                <h1>{data.tytul}</h1>
                <ReactMarkdown source={data.htm.html} />
                <div>{data.htm.html}</div>


            </div>



        </Layout>
    )
}


export default AktualnosciTemplate
