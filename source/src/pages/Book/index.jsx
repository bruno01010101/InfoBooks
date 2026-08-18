import styles from './book.module.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';

export default function Book() {

    const { id } = useParams();
    const [livro, setLivro] = useState(null);

    useEffect(() => {
        async function axiosBooks() {
            try{
                const apiKey = import.meta.env.VITE_GOOGLE_KEY;
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`);
                setLivro(response.data);
                console.log('Livro buscado com sucesso:', response.data);
            }catch(error){
                console.error('Erro ao buscar livro:', error);
            }
        }

        axiosBooks();
    }, [])
    return (
        <div className={styles.book}>
            <h1>{livro?.volumeInfo.title}</h1>
            <h2>{livro?.volumeInfo.subtitle}</h2>

            <div className={styles.info}>
                <p>{livro?.volumeInfo.authors?.join(', ')}</p>
                <p>
                    {livro?.volumeInfo.publisher}
                    <img src={livro?.volumeInfo.imageLinks?.thumbnail} alt="imagem" className={styles.image} />
                </p>
            </div>

            <div className={styles.description}>
                <p dangerouslySetInnerHTML={{ __html: livro?.volumeInfo.description}}></p>
                {/*{text.replace(/<[^>]+>/g, '')} */}
            </div>

            <div className={styles.meta}>
                <p>total de páginas: {livro?.volumeInfo.pageCount}</p>
                <p>categorias: {livro?.volumeInfo.categories?.join(', ')}</p>
            </div>

            <div className={styles.footer}>
                <p className={styles.price}>preço: {livro?.volumeInfo.maturityRating}</p>
                <a href={livro?.volumeInfo.previewLink} className={styles.buyLink} target="_blank" rel="noopener noreferrer">
                    Acessar
                </a>
            </div>
        </div>
    )
}