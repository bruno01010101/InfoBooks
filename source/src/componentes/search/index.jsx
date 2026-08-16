import styles from "./search.module.css"

export default function Search({placeholder}){
    return(
        <input type="text" className={styles.input} placeholder={placeholder}/>
    )
}