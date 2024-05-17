// @ts-ignore
import curriculo from "@/assets/resource/Gabriel.pdf";
import styles from "./resume.module.scss"

export default function Resume() {
    return (
        <embed
            className={styles.container}
            src={curriculo} type="application/pdf" />
    );
}
