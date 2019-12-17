import React from "react"
import Layout from "../components/layout"
import { StaticQuery } from "gatsby"

// const Kalendarze = () => (
//     <StaticQuery
//         query={graphql`
//     query{
//         persons {
//             kalendarzes {
//               id
//               calendarLink
//             }
//           }
//         }
//     `}

//         render={({ persons: { kalendarzes } }) => (
//             <div className="calendars-content">
//                 {kalendarzes.map(function (item, i) {

//                     return (
//                         <>
//                             <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%2339c8df&amp;ctz=Europe%2FWarsaw&amp;src=ZzczZW9vdGxkM3N0NG1hMHZna2djY2t2MmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23A87070&amp;showPrint=0&amp;showDate=1&amp;showNav=1&amp;showTabs=1&amp;showTz=0&amp;title=Pok%C3%B3j%20A%203.28&amp;showCalendars=0" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
//                         </>
//                     )
//                 }
//                 )}
//             </div>
//         )
//         }
//     />
// )
const KalendarzPage = () => (
    <Layout>
        <div className="title-page-contener">
            <div className="line-left"></div>
            <div className="title-page">KALENDARZ</div>
            <div className="line-right"></div>
        </div>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%2339c8df&amp;ctz=Europe%2FWarsaw&amp;src=ZzczZW9vdGxkM3N0NG1hMHZna2djY2t2MmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23A87070&amp;showPrint=0&amp;showDate=1&amp;showNav=1&amp;showTabs=1&amp;showTz=0&amp;title=Pok%C3%B3j%20A%203.28&amp;showCalendars=0" style={{borderwidth:0, width:"800", height:"600"}} ></iframe>                     
    </Layout>
)

export default KalendarzPage
