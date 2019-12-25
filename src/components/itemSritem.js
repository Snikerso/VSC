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

                                <Typography paragraph>
                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>

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
