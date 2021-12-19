import type { NextPage } from "next";

import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Services } from "../components/Services";
import { Social } from "../components/Social";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
	return (
		<>
			<Header />

			<main className={styles.main}>
				<section className={styles.presentation}>
					<h1>Olá, eu sou o Pedro Barbosa :)</h1>
					<h2>Desenvolvedor Front-End & Mobile</h2>
					<div className={styles.buttons}>
						<Button link="#" label="Download CV" color="blue" />
						<Button
							link="https://wa.me/5582996124520"
							label="Entrar em contato"
							color="black"
						/>
					</div>
				</section>

				<section className={styles.about}>
					<h2>Sobre mim</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident
					</p>
				</section>

				<Social />

				<Services />
			</main>
		</>
	);
};

export default Home;
