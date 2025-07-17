import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({title, styles }) => {
    return (
        <button className={styles}>{title}</button>
    )
}

export default Button;