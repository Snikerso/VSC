import React,{useEffect} from "react"
import Layout from "../components/layout"
import { StaticQuery } from 'gatsby'
import ItemSofthard from '../components/ItemSoftHard'





const SoftWarePage = () => {


  // const col = false

  // let newTemp = softwares.map(item => {
  //   return { ...item, col }
  // })


  // const handleText = (id, softwares) => {





    // let items = expanded.map(item => {
    //   return item.col
    // })
    // console.log(items)

    // let oneColapse = newTemp.find(item => item.id === id)




    // const {id, description} = tempHours
    // let newTemp = [id,description,colapse]
    // console.log(newTemp)

    // let tempExpenses = softwares.map(item => {
    //   return item.id === id ? { ...item } : item;
    // })
    // console.log(softwares)

  // }

  return (
    <Layout>
      <StaticQuery
        query={graphql`
    query{
      persons {
        softwares {
          id
          description
          descriptionMore

          photo{
            url
          }
        }
      }
    }
    `}
        render={({ persons: { softwares } }) => {
          // Tworzenie persons z falsem 



          return (
            <div className="narzedzia">
              
                  <ItemSofthard
                    softwares={softwares}
                  />

            </div>
          )
        }}

      />

    </Layout>
  )

}

export default SoftWarePage
