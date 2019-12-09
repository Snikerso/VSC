import React, { useState } from "react"
import { Link } from "gatsby"
import { IoIosFlask, IoMdBook } from 'react-icons/io';
import { MdMenu, MdGroup, MdGroupAdd, MdEmail, MdVisibility } from 'react-icons/md';
import { AiOutlineLaptop, AiOutlineEye, AiOutlineExperiment } from "react-icons/ai";
import { FaMicrochip, FaBookOpen, FaClipboard } from 'react-icons/fa';

const Navigation = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <>

            < nav className={"nav-mobile"}  >
                <div className="nav-mobile-bar" onClick={() => setNavOpen(!navOpen)}><MdMenu /></div>
                <ol className={navOpen ? "nav-mobile-active" : "nav-mobile-unactive"} >
                    <div className="nav-mobile-bar-delete" onClick={() => setNavOpen(!navOpen)}>x</div>

                    <Link className="nav-li" to="/">
                        <div className="nav-li-name">O NAS</div>
                    </Link>
                    <Link className="nav-li" to="/osoby">
                        <div className="nav-li-name">OSOBY</div>
                    </Link>
                    <Link className="nav-li" to="/publikacje">
                        <div className="nav-li-name">PUBLIKACJE</div>
                    </Link>
                    <Link className="nav-li" to="/badania">
                        <div className="nav-li-name">BADANIA</div>
                    </Link>
                    <Link className="nav-li" to="/oprogramowanie">
                        <div className="nav-li-name">SPRZĘT</div>
                    </Link>
                    <Link className="nav-li" to="/ogloszenia">
                        <div className="nav-li-name">OGŁOSZENIA</div>
                    </Link>
                    <Link className="nav-li" to="/kontakt">
                        <div className="nav-li-name">KONTAKT</div>
                    </Link>
                    <Link className="nav-li" to="/aktualnosci">
                        <div className="nav-li-name">AKTUALNOŚCI</div>
                    </Link>
                </ol>
            </nav >


        </>
    )
}
export default Navigation
