import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { hotjar } from "react-hotjar";

import "../styles/globals.scss";
import styles from "../styles/app.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Pedro Barbosa</title>
				{useEffect(() => {
					hotjar.initialize(2754607, 6);
				}, [])}
			</Head>
			<div className={styles.appContainer}>
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default MyApp;
