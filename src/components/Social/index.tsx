import styles from "./styles.module.scss";

export const Social = () => {
	return (
		<div className={styles.container}>
			<div className={styles.box}>
				<a href="mailto:p.brbsa@gmail.com">
					<img src="/mail.svg" alt="" />
				</a>
				<h3>E-Mail</h3>
				<h4>p.brbsa@gmail.com</h4>
			</div>
			<div className={styles.box}>
				<a href="https://www.linkedin.com/in/pedro-abarbosa/">
					<img src="/linkedin.svg" alt="" />
				</a>
				<h3>Linkedin</h3>
				<h4>pedro-abarbosa</h4>
			</div>
			<div className={styles.box}>
				<a href="https://github.com/pedrobarbosa0">
					<img src="/github-transparent.svg" alt="" />
				</a>
				<h3>GitHub</h3>
				<h4>pedrobarbosa0</h4>
			</div>
		</div>
	);
};
