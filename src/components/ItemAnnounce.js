import React, { useState } from "react"




const ItemAnnounce = ({ item, handleText }) => {
    const { id, text, title, help } = item;

    return (
        <>
            <div className="announce">
                <div className="announce-card" key={item.id}>
                    <div className="announce-head-data">
                        <h2 className="announce-head">{title}</h2>
                        <div className="announce-data">06.12.2019</div>

                    </div>
                    <div>
                        {text}
                    </div>

                    <div className="announce-buttons">

                        <div onClick={() => handleText(id)} >{item.subject ? <div className="announce-buttons-zapisz">Zapisz się </div> : null}
                        </div>
                    </div>

                </div>
                <div className="more-information">
                    {item.cos ?
                        <div className="more-information-active">
                            <p> Paweł Drojecki</p>
                            <p> kom: 663406297  </p>
                            <p> e-mail: snikersdro@gmail.com </p>
                        </div> : null}
                </div>
            </div>
        </>
    )
}


export default ItemAnnounce
