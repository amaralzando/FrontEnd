import styles from "@/styles/home.module.scss";
import Programmer from "@/assets/img/programmer.png";
import { useEffect, useState } from "react";
import { NoSsr } from '@material-ui/core';
import {RepeatTransaction} from "@/components/ repeatTransaction";

export default function Home() {
    const [animation, setAnimation] = useState("");

    useEffect(() => {
        const startAnimation = () => {
            const animations = [
                styles.moveinitial,
                styles.moveRight,
                styles.moveLeft,
            ];

            const animate = (index: number) => {
                setAnimation(animations[index]);
                setTimeout(() => {
                    if (index + 1 < animations.length) {
                        animate(index + 1);
                    } else {
                        animate(0);
                    }
                }, 1000);
            };

            animate(0);
        };

        startAnimation();
    }, []);

    return (
        <NoSsr>
            <div className={styles.container}>
                <div className={styles.helo}>
                    <div className={styles.heloText}>
                        <p className={styles.name}>
                            <RepeatTransaction
                                className={styles.emoji}
                                animations={[ styles.moveinitial, styles.moveRight, styles.moveLeft,]}
                            >
                                ✌🏻
                            </RepeatTransaction>
                            Olá! Eu sou Gabriel Amarall
                        </p>
                        <p className={styles.title}>
                            Como <span>desenvolvedor full stack</span>, colaboro tanto na{" "}
                            <span>criação</span> quanto na
                            <span> atualização</span> do back-end e front-end.
                        </p>
                        <p className={styles.phrase}>
                            Desenvolvedor full stack com mais de 1 ano de experiência,
                            reconhecido como prático e eficaz. Possuo experiência com
                            multinacionais e sou bastante proativo e eficiente em ambientes
                            pressionados pelo tempo para concluir projetos dentro do prazo e do
                            orçamento.
                        </p>
                    </div>
                    <img src={Programmer.src} alt={"Programador sentado no computador"} />
                </div>
                <div id="project" className={styles.project}>
                    <h1>Projetos</h1>
                </div>
                <div id="about" className={styles.project}>
                    <h1>Sobre mim</h1>
                </div>
                <div id="contact" className={styles.project}>
                    <h1>contato</h1>
                </div>
            </div>
        </NoSsr>
    );
}
