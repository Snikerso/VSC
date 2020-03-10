import React from "react"
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';



const ItemAnn = ({ item, handleText }) => {
    const { id, title } = item;

    const coltrue = true
    return (
        <>
            <div className="announce">
                <div className="announce-card" >
                    <div className="announce-head-data">
                        <h2 className="announce-head">{item.title}</h2>
                        <div className="announce-data">{item.createdAt.substring(0, 10)}</div>
                    </div>
                    <div>
                        {item.description}
                    </div>

                    <div className="announce-buttons">

                        <div onClick={() => handleText(id)} >{coltrue ? <div className="announce-buttons-zapisz">Zapisz się </div> : null}
                        </div>
                    </div>

                    <Collapse in={item.col} timeout="auto" unmountOnExit>

                        <Typography paragraph>
                            <div style={{textAlign:'center'}}>
                                <p> {item.name}</p>
                                
                                <p>{item.email} </p>
                            </div>
                        </Typography>

                    </Collapse>
                    {/* <div className="more-information">
                        {item.col ?
                            <div className="more-information-active">
                                <p> Paweł Drojecki</p>
                                <p> kom: 663406297  </p>
                                <p> e-mail: snikersdro@gmail.com </p>
                            </div> : null}
                    </div> */}
                </div>

            </div>
        </>
    )
}


export default ItemAnn
