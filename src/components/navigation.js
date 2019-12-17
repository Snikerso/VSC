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
            < nav className="nav-screen" onClick={() => setNavOpen(!navOpen)} >
                <div className="logo" style={{ backgroundImage: `url(${require('../images/LOGO-EYE-4.png')})` }}></div>
                <ol className="active" >
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
                    <Link className="nav-li" to="/aktualnosci">
                        <div className="nav-li-name">AKTUALNOŚCI</div>
                    </Link>
                    <Link className="nav-li" to="/oprogramowanie">
                        <div className="nav-li-name">SPRZĘT</div>
                    </Link>
                    <Link className="nav-li" to="/ogloszenia">
                        <div className="nav-li-name">OGŁOSZENIA</div>
                    </Link>
                    <Link className="nav-li" to="/kalendarz">
                        <div className="nav-li-name">KALENDARZ</div>
                    </Link>
                    <Link className="nav-li" to="/kontakt">
                        <div className="nav-li-name">KONTAKT</div>
                    </Link>

                </ol>

            </nav>
        </>
    )
}
export default Navigation






{/* <ol className="active" >
                <li className="active">
                    <Link className="nav-li" to="/">
                        
                        <div className="nav-li-icon">
                            <MdVisibility />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className="nav-li" to="/osoby">
                        <div className="nav-li-name">Osoby</div>
                        <div className="nav-li-icon">
                            <MdGroup />
                        </div>
                    </Link>

                </li>
                <li>
                    <Link className="nav-li" to="/publikacje">
                        <div className="nav-li-name">Publikacje</div>
                        <div className="nav-li-icon">
                            <FaBookOpen />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className="nav-li" to="/badania">
                        <div className="nav-li-name">Badania</div>
                        <div className="nav-li-icon">
                            < IoIosFlask />
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className="nav-li" to="/oprogramowanie">
                        <div className="nav-li-name">Oprogramowanie</div>
                        <div className="nav-li-icon">
                            <FaMicrochip />
                        </div>
                    </Link>
                </li>
                <li className="nav-item">

                    <li>
                        <Link className="nav-li" to="/ogloszenia">
                            <div className="nav-li-name">Ogloszenia na badania</div>
                            <div className="nav-li-icon">
                                <MdGroupAdd />
                            </div>
                        </Link>
                    </li>
                    <li >
                        <Link className="nav-li" to="/kontakt">
                            <div className="nav-li-name">Kontakt</div>

                            <div className="nav-li-icon">
                                <MdEmail />
                            </div>
                        </Link>
                    </li>
                    <li className="active">
                        <Link className="nav-li" to="/aktualnosci">
                            <div className="nav-li-name">Aktualności</div>
                            <div className="nav-li-icon">
                                <FaClipboard />
                            </div>
                        </Link>
                    </li>

                </li>

            </ol> */}