import React , {useState} from "react"

import ItemAnn from './ItemAnn'


const ItemAnnounce = ({ ogloszenias }) => {


    const col = false

    let newSoft = ogloszenias.map(item => {
        return { ...item, col }

    })

    const [expands, setExpands] = useState(newSoft)


    const handleText = (id, item) => {

        let tempHours = expands.find(item => item.id === id)
        console.log(tempHours.col = !tempHours.col)
        // 
        setExpands([...expands])
    }
    return (
        <>
            {expands.map(item => {
                return (
                    <ItemAnn
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


export default ItemAnnounce
