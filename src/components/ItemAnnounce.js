import React, { useState } from "react"




const ItemAnnounce = ({ item, handleText }) => {
    const { id, text, title, help } = item;

    return (
        <>
            <div className="announce">
                <div className="announce-card" key={item.id}>
                    <h2>{title}</h2>
                    <div>
                        {text}
                    </div>

                    <div className="announce-buttons">

                        <div onClick={() => handleText(id)} >{item.subject ? <div className="announce-buttons-zapisz">Zapisz się </div> : null}
                        </div>
                    </div>

                </div>
                <div className="more-information">
                    {item.cos ? <div className="more-information-active">{item.title}</div> : null}
                </div>
            </div>
        </>
    )
}


export default ItemAnnounce
