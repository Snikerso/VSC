import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
const ReactMarkdown = require('react-markdown/with-html')
const AktualnosciTemplate = ({ pageContext: { data } }) => {

    return (

        <Layout>
            <div className="title-page-contener">
                <div className="line-left"></div>
                <div className="title-page">{data.title}</div>
                <div className="line-right"></div>
            </div>

            <div className="news-template-contener">
                <div className="news-template">
                    <ReactMarkdown
                        source={data.cnjdsn}
                        escapeHtml={false}
                    />
                </div>
                <Link className="news-back" to="/aktualnosci">Wróć do aktualności</Link>
            </div>
        </Layout>
    )
}


export default AktualnosciTemplate
