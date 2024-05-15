import '@/styles/globals.scss'
import type {AppProps} from "next/app";
import NavBar from '@/containers/navbar/Index';
import {useState} from "react";
import Head from "next/head";
import {ThemeProvider} from "@/context/ThemeContext";

export default function App({Component, pageProps}: AppProps) {

    const [theme, setTheme] = useState<"light" | "dark">('dark')

    return (
        <ThemeProvider>
            <div className={theme}>
                <Head>
                    <title>Portifólio Grabriel</title>
                </Head>
                <NavBar />
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    );
}
