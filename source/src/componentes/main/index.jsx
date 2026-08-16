import Card from '../card'
import Search from '../search'
import styles from './main.module.css'

export default function Main() {
    return(
        <div className={styles.main}>
            <h1>Feed de livros</h1>
            <Search  placeholder="Pesquise um livro." />
            <div className={styles.livros}>
                <Card />
            </div>
        </div>
    )
}