import React, { useState } from "react"
import ItemSritem from './itemSritem'


const ItemSoftHard = ({ hardwares }) => {

    const col = false

    let newSoft = hardwares.map(item => {
        return { ...item, col }

    })

    const [expands, setExpands] = useState(newSoft)

    
    const handleText = (id,item) => {
        console.log(item.col)
        let tempHours = expands.find(item => item.id === id)
        console.log(tempHours.col = !tempHours.col)
        // 
        setExpands([...expands])
    }

    return (
        <>
            {expands.map(item => {
                return (
                    <ItemSritem
                        handleText={handleText}
                        expands={expands}
                        item={item}
                    />
                )
            })

            }
        </>
    )
}


export default ItemSoftHard
