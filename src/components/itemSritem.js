import React, { useState } from "react"
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';



const itemSritem = ({ item, handleText}) => {
    const { id, text, title, help ,col} = item;
    console.log(col)
    return (
        <>
            <div className="badania-contener">

                <div className="badania-text-image">
                    <div className="badania-narzedzia-image" style={{ backgroundImage: `url(${item.photo.url})` }}></div>
                    <div className="badania-text">
                        <h3 className="badania-title">{item.title}</h3>
                        <Typography paragraph>
                            {item.description}
                        </Typography>

                        <div style={{ backgroundColor: "white", zIndex: 2 }}>

                            <Collapse in={col} timeout="auto" unmountOnExit>

                                <Typography paragraph>{item.descriptionMore}</Typography>

                            </Collapse>
                            <div
                                className="badania-more"
                                onClick={() => handleText(id,item)}
                                aria-expanded={col}
                                aria-label="show more">{col ? "Mniej" : "Więcej"}</div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default itemSritem
