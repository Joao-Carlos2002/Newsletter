import styles from "./carboard.module.css"

export default function Cardboard() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Inscreva-se gratuitamente</h2>
            <label htmlFor={styles.nameInput}>
                <input id={styles.nameInput} type="text" placeholder="👤Seu nome Completo" />
            </label>
            <label htmlFor={styles.email}>
                <input id={styles.email} type="email" placeholder="✉️Digite seu e-mail" />
            </label>
            <p className={styles.programLvl}>Qual o seu nivel em programação?</p>
            <div className={styles.containerBtn}>
                <button className={styles.btn1}>😎Estou começando em programação</button>
                <button className={styles.btn2}>🥷Já sou dev e tenho conhecimento</button>
            </div>
            <div className={styles.termsContainer}>
                <input type="checkbox" name="terms" id={styles.terms} />
                <span className={styles.textTerms}>Concordo com os <span className={styles.underline}>Termos</span> e <span className={styles.underline}>Políticas de privacidade.</span></span>
            </div>
            <button className={styles.submit}>QUERO RECEBER</button>
            <hr className={styles.hr} />
            <p className={styles.textFinal}>Nós respeitamos sua privacidade. Cancele sua assinatura a hora que quiser 😀</p>
        </div>
    )
}