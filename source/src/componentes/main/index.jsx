import Card from '../card'
import Search from '../search'
import styles from './main.module.css'

export default function Main() {
    return(
        <div className={styles.main}>
            <h1>Feed de livros</h1>
            <Search  placeholder="Pesquise um livro." />
            <div className={styles.livros}>
                <Card icone="estrela" anoLancamento="2012" paginas="375" categoria="Brain" autor="John Doe" 
                descricao="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qollit anim id est laborum." titulo="Título do livro"/>
                <Card icone="estrela" anoLancamento="2012" paginas="375" categoria="Brain" autor="John Doe" 
                descricao="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qollit anim id est laborum." titulo="Título do livro" s/>
                <Card icone="estrela" anoLancamento="2012" paginas="375" categoria="Brain" autor="John Doe" 
                descricao="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qollit anim id est laborum." titulo="Título do livro" s/>
                <Card icone="estrela" anoLancamento="2012" paginas="375" categoria="Brain" autor="John Doe" 
                descricao="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qollit anim id est laborum." titulo="Título do livro" s/>
                <Card icone="estrela" anoLancamento="2012" paginas="375" categoria="Brain" autor="John Doe" 
                descricao="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qollit anim id est laborum." titulo="Título do livro" s/>
                <Card icone="estrela" anoLancamento="2012" paginas="375" categoria="Brain" autor="John Doe" 
                descricao="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qollit anim id est laborum." titulo="Título do livro" s/>
                <Card icone="estrela" anoLancamento="2012" paginas="375" categoria="Brain" autor="John Doe" 
                descricao="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qollit anim id est laborum." titulo="Título do livro" s/>
            </div>
        </div>
    )
}