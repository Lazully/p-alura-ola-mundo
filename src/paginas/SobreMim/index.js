import PostModelo from "Componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from "./sobreMim.module.css"
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o...
            </h3>

            <img src={fotoSobreMim}
                alt="Foto dele sorrindo"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
            </p>
            <p className={styles.paragrafo}>
                zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
            </p>
            <p className={styles.paragrafo}>
                zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
            </p>
            <p className={styles.paragrafo}>
                zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
            </p>
            <p className={styles.paragrafo}>
                zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
            </p>

        </PostModelo>
    )
}