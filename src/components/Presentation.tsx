import '../style/Presentation.css'
import "../style/font.css"
import AvatarImg from "../img/jedi.png";
import { StaticImageData } from 'next/image';

export default function Presentation() {
    return (
        <div className="Container-Start slide-animation">
            <section>
                <div className="content">
                    <div className="img-jedi">
                        <img className="avatar" src={(AvatarImg as StaticImageData).src} alt="Avatar Jedi" />
                    </div>
                    <div>
                        <span>
                            <p className="text text-color star-wars-text width-text">
                                Seja bem-vindo ao meu perfil.
                            </p>
                            <p className="text text-color star-wars-text width-text">
                                Meu nome é <strong>Willian</strong>, sou desenvolvedor full-stack, sou inspirado em transformar ideias em realidade.<br />
                                Aqui, você encontrará um pouco mais sobre minha jornada e projetos.<br />
                                Sinta-se à vontade para explorar e conhecer um pouco do meu mundo.
                            </p>
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
}