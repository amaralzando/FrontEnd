import {useState, useContext} from "react";
import LogoBlack from "@/assets/dark.png";
import styles from "./navbar.module.scss";
import {HeadingBlack} from "@/assets/icons/heading";
import {Hamburguer} from "@/assets/icons/hamburguer";
import {Cancel} from "@/assets/icons/cancel";
import GitHub from "@/assets/midias/logo.png";
import LikedIn from "@/assets/midias/likedin.png";
import WhatsApp from "@/assets/midias/whastapp.png"

export default function NavBar() {

    const [menu, setMenu] = useState<boolean>(false);

    const toggleMenu = () => {
        setMenu(!menu)
    }

    const openPDF = () => {
        window.open('public/Gabriel.pdf', '_blank');
    };

    return (
        <>
            <div className={styles.navbar}>
                <img src={LogoBlack.src}
                     alt="Logo"/>
                <a onClick={toggleMenu}>
                    {
                        menu ? <Cancel size={50}/> : <Hamburguer size={50}/>
                    }
                </a>
            </div>
            {
                menu ? (
                    <div className={styles.navBarOpen}>
                        <div className={styles.socialMedia}>
                            <a className={` ${styles.midia} ${styles.github}`}
                               href="https://github.com/amaralzando"
                               target="_blank" rel="noopener noreferrer"
                               onClick={() => setMenu(!menu)}
                            >
                                <p> GitHub</p>
                                <img src={GitHub.src}/>
                            </a>
                            <a className={` ${styles.midia} ${styles.likedin}`}
                               href="https://www.linkedin.com/in/gabrielasandrade/"
                               target="_blank" rel="noopener noreferrer"
                               onClick={() => setMenu(!menu)}
                            >
                                <p> LikedIn</p>
                                <img src={LikedIn.src}/>
                            </a>
                            <a className={` ${styles.midia} ${styles.whatsapp}`}
                               href="https://wa.me/5511949885326"
                               target="_blank" rel="noopener noreferrer"
                               onClick={() => setMenu(!menu)}
                            >
                                <p> WhatsApp</p>
                                <img src={WhatsApp.src}/>
                            </a>

                        </div>
                        <div className={styles.otherFields}>
                            <div className={styles.navBarClose}>
                                <a onClick={toggleMenu}>
                                    {
                                        menu ? <Cancel size={50}/> : <Hamburguer size={50}/>
                                    }
                                </a>
                            </div>
                            <div className={styles.navigation}>
                                <a className={styles.text} href="#project" onClick={() => setMenu(!menu)}>
                                    Projeto
                                </a>
                                <a className={styles.text} href="#about" onClick={() => setMenu(!menu)}>
                                    Sobre mim
                                </a>
                                <a className={styles.text}
                                   href={"public/Gabriel.pdf"}
                                >
                                    Resume
                                </a>
                                <a className={styles.text} href="mailto:gaamaralpessoal@gmail.com" onClick={() => setMenu(!menu)}>
                                    Contato
                                </a>
                                <a className={styles.text}>
                                    <HeadingBlack size={30}/>
                                </a>
                            </div>
                        </div>
                    </div>

                ) : null
            }
        </>
    );
}
