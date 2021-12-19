import styles from "./styles.module.scss";

export const Header = () => {
	return (
		<header className={styles.container}>
			<div className={styles.box}>
				<h1>Portifolio</h1>
				<nav className={styles.nav}>
					<a href="#sobre-mim">Sobre mim</a>
					<a href="#servicos">Serviços</a>
					<a href="#projetos">Projetos</a>
					<a href="#stack">Stack</a>
				</nav>
			</div>
		</header>
	);
};
