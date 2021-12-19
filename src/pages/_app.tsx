import "../styles/globals.scss";
import styles from "../styles/app.module.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className={styles.appContainer}>
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
