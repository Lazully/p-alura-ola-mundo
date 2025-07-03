import styles from './banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá Mundo!
                </h1>

                <p className={styles.paragrafo}>

                </p>

            </div>

            <div className={styles.imagens}>
                <img className={styles.imagens}
                src={circuloColorido}
                aria-hidden={true}/>

                <img className={styles.minhaFoto}
                src={minhaFoto}
                alt="Foto de pessoa sorrindo"
                />
            </div>
        </div>
    )
}