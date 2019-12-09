import React, { useState } from "react"
import Layout from "../components/layout"


const AktualnosciPage = () => {

  return (
    <Layout>
      <div className="title-page-contener">
        <div className="line-left"></div>
        <div className="title-page">Aktualności</div>
        <div className="line-right"></div>
      </div>
      <div className="news-card">
        <h4>Tytuł dzis nauka pełni cuda</h4>
        <div style={{ color: "blue" }}>08.12.2019</div>
        <div className="news-text">cmad c dam ammadmdamaa mm amdmadma  ma am mammdam am,a mam  ma ma</div>
        <div >wiecej</div>



      </div>


    </Layout>
  )


}
// const [grid, setGrid] = useState(() => {
//   const rows = [];
//   for (let i = 0; i < numRows; i++) {
//     rows.push(Array.from(Array(numCols), () => 0))
//   }
//   return rows
// });
// console.log(grid)


// return (
//   <div style={{ display: "grid", gridTemplateColumns: `repeat:(10,10px)` }}>
//     <div >
//       {grid.map((rows, i) =>
//         rows.map((col, k) => (
//           <div
//             key={`${i}-${k}`}
//             style={{ width: 20, height: 20, backgroundColor: 'red' }}
//           ></div>
//         ))
//       )}
//     </div>
//   </div>
// )

export default AktualnosciPage
