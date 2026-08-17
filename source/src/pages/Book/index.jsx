import styles from './book.module.css'

export default function Book() {
    let text = "<p>Uma coleção de contos queridos para bruxas e magos de todas as idades, <i>Os contos de Beedle, o Bardo</i> são os Contos de Grimm do Mundo Bruxo. Esta edição foi traduzida das runas originais pela própria Hermione Granger e contém anotações úteis tanto do Professor Dumbledore e de J.K. Rowling. <br><br>Uma oportunidade maravilhosa de ler as histórias que desempenharam um papel tão importante na luta contra o Lorde Voldemort, esses clássicos contos de fadas encantam e educam igualmente. Há cinco contos no total: \"<i>O Conto dos Três Irmãos</i>\" é conhecido por todos que tiverem lido <i>Harry Potter e as Relíquias da Morte</i>; \"<i>A Fonte da Sorte</i>\", \"<i>O Coração Peludo do Mago</i>\", \"<i>O Bruxo e o Caldeirão Saltitante</i>\" e \"<i>Babbitty, a Coelha, e seu Toco Gargalhante</i>\" completam a coleção. <br><br>As prateleiras da Biblioteca de Hogwarts são lar de toda sorte de livros fascinantes. Se você curtiu <i>Os contos de Beedle, o Bardo</i>, também vai querer conferir alguns outros tesouros: <i>Animais fantásticlha para reunir essas crianças com suas famílias, promover alternativas de cuidados entre elas e ajudar as autoridades na reformulação de seus sistemas com o objetivo de fechar instituições e orfanatos.</i></p>"

    return (
        <div className={styles.book}>
            <h1>Título do Livro</h1>
            <h2>subtítulo</h2>

            <div className={styles.info}>
                <p>autor</p>
                <p>
                    publisher
                    <img src="http://books.google.com/books/publisher/content?id=_OshDAAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71prEpJQHYwl4hYzNb3V-Z_f7zsX_pe1m5eDgOKY90zP-ek8yiUqlSk4-df9RlCzXhwKDLVzyMoOT8mNGtaypNI7BrTHWbs9jPaHiiNj_msLPEhT5gCTvjnUlyIsqUnvM8KPtcK&source=gbs_api" alt="imagem" className={styles.image} />
                </p>
            </div>

            <div className={styles.description}>
                {text.replace(/<[^>]+>/g, '')}
            </div>

            <div className={styles.meta}>
                <p>total de páginas</p>
                <p>categoria</p>
            </div>

            <div className={styles.footer}>
                <p className={styles.price}>preço</p>
                <a href="link-de-compra" className={styles.buyLink}>Comprar</a>
            </div>
        </div>
    )
}