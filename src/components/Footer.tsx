import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style/Footer.css'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <>
        <hr />
            <footer className="Footer" id='Footer'>
                <div className="container-footer">
                    <div className='sub-title text-color star-wars-text'>
                        <p>Entre em contato</p>
                    </div>
                    <div className='contacts text-color swing-animation star-wars-text'>
                        <h1><a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="icon-footer" />Instagram</a></h1>
                        <h1><a href="https://www.linkedin.com/in/willian-sighinolfi-6a3974172" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon-footer" />Linkedin</a></h1>
                        <h1><a href="/"><FontAwesomeIcon icon={faEnvelope} className="icon-footer" />E-mail</a></h1>
                    </div>
                </div>
            </footer>


        </>
    );
}