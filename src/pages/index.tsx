import { useContext } from "react";
import styles from "@/styles/home.module.scss";
import { ThemeContext } from "@/context/ThemeContext"

export default function Home() {
    const theme = useContext(ThemeContext).theme;

    return (
        <div className={styles[theme]}>
            <div className={styles.summary}>
                Teste
                teste
                teste
                teste
                teste
                teste
                teste
            </div>
            <div id="project" className={styles.project}>
                <h1>Projetos</h1>
            </div>
            <div id="About" className={styles.project}>
                <h1>Sobre mim</h1>
            </div>
            <div id="contact" className={styles.project}>
                <h1>contato</h1>
            </div>
        </div>
    );
}
