import styles from "./styles.module.scss";

export const Services = () => {
	return (
		<section className={styles.container}>
			<h2>Serviços</h2>
			<div className={styles.cards}>
				<div className={styles.card}>
					<img src="/code.svg" alt="" />
					<h3>Front-End Development</h3>
				</div>
				<div className={styles.card}>
					<img src="/smartphone.svg" alt="" />
					<h3>Mobile Development</h3>
				</div>
				<div className={styles.card}>
					<img src="/web.svg" alt="" />
					<h3>Back-End Development</h3>
				</div>
			</div>
		</section>
	);
};
