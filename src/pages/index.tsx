import type { NextPage } from "next";

import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";
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
						<Button
							link="https://drive.google.com/file/d/18NBBj_z6xp8yh9mn8jEHwdiBg0bDQyjO/view?usp=sharing"
							label="Download CV"
							color="blue"
						/>
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
						Um dev front-end que sonha com React e seu ecossistema quase todas as
						noites. Movido a desafios, então se tem um problema ou um projeto para
						implementar e precisa de um dev ReactJS, me chama no Linkedin ou manda um
						e-mail que vai ser um prazer ajudar.
					</p>
				</section>

				<Social />

				<Services />

				<Projects />
			</main>
		</>
	);
};

export default Home;
