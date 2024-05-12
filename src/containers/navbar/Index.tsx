import {useState, useContext} from "react";
import LogoWhite from "@/assets/light.png";
import LogoBlack from "@/assets/dark.png";
import styles from "./navbar.module.scss";
import Link from "next/link";
import {HeadingLight, HeadingBlack} from "@/assets/icons/heading";
import {ThemeContext} from "@/context/ThemeContext";

interface NavBarProps {
    onThemeChange: (theme: "light" | "dark") => void;
}

export default function NavBar({onThemeChange}: NavBarProps) {
    const themeContext = useContext(ThemeContext)
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        onThemeChange(newTheme);
        themeContext.setTheme(newTheme);
    };

    return (
        <>
            <div className={`${styles.navbar} ${styles[theme]}`}>
                <img src={theme === "light" ? LogoBlack.src : LogoWhite.src} alt="Logo"/>
                <div className={styles.navigation}>
                    <Link href="#project">
                        <span className={styles.text}>Projeto</span>
                    </Link>
                    <Link href="#about">
                        <span className={styles.text}>Sobre mim</span>
                    </Link>
                    <Link href="#contact">
                        <span className={styles.text}>Contato</span>
                    </Link>
                    <a className={styles.text} onClick={toggleTheme}>
                        {theme === "light" ? <HeadingBlack size={30}/> : <HeadingLight size={30}/>}
                    </a>
                </div>
            </div>
        </>
    );
}
