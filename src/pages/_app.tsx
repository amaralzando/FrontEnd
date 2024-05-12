import '@/styles/globals.scss'
import type {AppProps} from "next/app";
import NavBar from '@/containers/navbar/Index';
import {useState} from "react";
import Head from "next/head";
import {ThemeProvider} from "@/context/ThemeContext";

interface NavBarProps {
    onThemeChange: (theme: "light" | "dark") => void;
}

export default function App({Component, pageProps}: AppProps, { onThemeChange }:NavBarProps) {

    const [theme, setTheme] = useState<"light" | "dark">('light')

    return (
        <ThemeProvider>
            <div className={`container ${theme}`}>
                <Head>
                    <title>Portifólio do Grabriel</title>
                </Head>
                <NavBar onThemeChange={newTheme => setTheme(newTheme)}/>
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    );
}
