import styles from "./search.module.css"

export default function Search({type, ...props}) {
    return(
        <input type={type || "text"} className={styles.input} {...props}/>
    )
}