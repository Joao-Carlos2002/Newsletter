import Image from 'next/image'
import styles from './title.module.css'
import newsLetterIcon from '../../assets/newsletter.svg'

export default function Title() {
    return (
        <div className={styles.container}>
            <div className={styles.containerNews}>
                <Image className={styles.newsIcon} src={newsLetterIcon} alt="Icone NewsLetter" />
                <p className={styles.newsletter}>NEWSLETTER</p>
            </div>
            <div>
                <h1 className={styles.title}>Receba conteúdos inéditos e novidades da Rocketseat</h1>
                <p className={styles.description}>Inscreva-se e receba conteúdos e novidades de forma totalmente gratuita, conforme o seu momento na programação, e se mantenha atualizado junto com as tecnologias.</p>
            </div>
        </div>
    )
}