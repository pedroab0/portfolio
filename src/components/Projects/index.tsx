import styles from "./styles.module.scss";

export const Projects = () => {
	return (
		<section className={styles.container}>
			<h2 className={styles.title}>Projetos</h2>
			<div className={styles.cards}>
				<a
					href="https://gestotus.netlify.app/"
					target="_blank"
					rel="noreferrer"
					className={styles.card}
				>
					<img src="/banner.jpg" alt="" />
					<h4>Gestotus</h4>
					<h5>TypeScript, React, NextJS & SASS</h5>
				</a>
				<a
					href="https://pbpodcastr.vercel.app/"
					target="_blank"
					rel="noreferrer"
					className={styles.card}
				>
					<img src="/podcastr.png" alt="" />
					<h4>Podcastr</h4>
					<h5>TypeScript, React, NextJS & SASS</h5>
				</a>
				<a
					href="https://gobeyond-final-challenge.netlify.app/"
					target="_blank"
					rel="noreferrer"
					className={styles.card}
				>
					<img src="/gobeyond.png" alt="" />
					<h4>GoBeyond Challenge</h4>
					<h5>JavaScript, React & Styled Components</h5>
				</a>
			</div>
		</section>
	);
};
