import { faCss3, faDocker, faEvernote, faGithub, faHtml5, faNode, faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import "../style/SecondItem.css"
import "../style/font.css"

export default function SecondItem() {
    return (
        <div className="Second-Container slide-animation">
            <section>
                <div className='Second' id="History">
                    <div className='text-container'>
                        <span><h1 className="title text-color star-wars-text">Minha historia</h1> </span>
                        <div>
                            <span>
                                <h2 className="sub-title text-color star-wars-text">
                                    Ensino Superior
                                </h2>
                                <p className="text text-color text-space star-wars-text">
                                    Sou formado em Análise e Desenvolvimento de Sistemas (Fatec): <br />
                                    Minha jornada acadêmica foi uma etapa fundamental na minha trajetória profissional.
                                    Durante esse período, tive a oportunidade de me familiarizar com diversas linguagens,
                                    arquitetura de software, bancos de dados e metodologias de desenvolvimento.<br />
                                    Ela me proporcionou as habilidades e conhecimentos necessários para ingressar no mundo profissional.
                                </p>
                                <h2 className="sub-title text-color star-wars-text" id="Experience">
                                    Experiência Profissional
                                </h2>
                                <p className="text text-color text-space star-wars-text">
                                    Analista e Desenvolvedor (Atual): tenho o privilégio de trabalhar na área de análise e desenvolvimento há quase 2 anos.<br />
                                    Minhas responsabilidades incluem não apenas o desenvolvimento, mas também o monitoramento de sistemas e o acompanhamento de seu desempenho.
                                    Além disso, trabalhei no campo da automacão, o que me permite otimizar as tarefas diárias e aprimorar a eficiência dos processos.<br />
                                    Sou um entusiasta na área e sinto uma grande paixão por desenvolver e criar, embora minha especializacão seja como desenvolvedor full-stack, tenho um interesse especial na criacão de sites e animacões,
                                    áreas em que busco inovar e aprimorar minhas habilidades constantemente.
                                </p>
                            </span>
                        </div>
                        <div className="content-icons">
                            <div className="rotate-border">
                                <FontAwesomeIcon icon={faSquareJs} className="icon-dev" />
                            </div>
                            <div className="rotate-border">
                                <FontAwesomeIcon icon={faNode} className="icon-dev" />
                            </div>
                            <div className="rotate-border">
                                <FontAwesomeIcon icon={faHtml5} className="icon-dev" />
                            </div>
                            <div className="rotate-border">
                                <FontAwesomeIcon icon={faReact} className="icon-dev" />
                            </div>
                            <div className="rotate-border">
                                <FontAwesomeIcon icon={faCss3} className="icon-dev" />
                            </div>
                            <div className="rotate-border">
                                <FontAwesomeIcon icon={faDocker} className="icon-dev" />
                            </div>
                            <div className="rotate-border">
                                <FontAwesomeIcon icon={faDatabase} className="icon-dev" />
                            </div>
                            <div className="rotate-border">
                                <FontAwesomeIcon icon={faGithub} className="icon-dev" />
                            </div>
                            <div className="rotate-border">
                                <FontAwesomeIcon icon={faEvernote} className="icon-dev" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}