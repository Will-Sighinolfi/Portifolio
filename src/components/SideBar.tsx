"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faBook,
    faBriefcase,
    faGamepad,
    faHome,
    faPhone,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import '../style/SideBar.css';

export default function SideBar() {
    return (
        <>
            <div className="container">
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="open">
                    <FontAwesomeIcon className="icon config-svg" icon={faBars} />
                </label>
                <div className="sidebar-wrapper">
                    <div className="sidebar">
                        <div className="avatar-wrapper">
                            <label htmlFor="check" className="close icon">
                                <FontAwesomeIcon icon={faTimes} />
                            </label>
                        </div>
                        <nav>
                            <ul className="menu star-wars-text text-color">
                                <li>
                                    <a href="/">
                                        <FontAwesomeIcon icon={faHome} className="icon" /> Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#History">
                                        <FontAwesomeIcon icon={faBook} className="icon" /> Historia
                                    </a>
                                </li>
                                <li>
                                    <a href="#Experience">
                                        <FontAwesomeIcon icon={faBriefcase} className="icon" /> Profissão
                                    </a>
                                </li>
                                <li>
                                    <a href="#Game">
                                        <FontAwesomeIcon icon={faGamepad} className="icon" /> Divirta-se
                                    </a>
                                </li>
                                <li>
                                    <a href="#Footer">
                                        <FontAwesomeIcon icon={faPhone} className="icon" /> Contato
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}