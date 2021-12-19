import styles from "./styles.module.scss";

interface ButtonProps {
	link: string;
	label: string;
	color: string;
}

export const Button = ({ link, label, color }: ButtonProps) => {
	return (
		<a href={link} className={styles[color]} target="_blank" rel="noreferrer">
			{label}
		</a>
	);
};
