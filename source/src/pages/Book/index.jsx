import styles from './book.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import LoadingSpinner from '../../LoadingSpinner';

export default function Book() {

    const { id } = useParams();
    const [livro, setLivro] = useState(null);
    const [loading, setLoading] = useState(true);
    const dinheiro = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })

    useEffect(() => {
        async function axiosBooks() {
            try {
                const apiKey = import.meta.env.VITE_GOOGLE_KEY;
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`);
                setLivro(response.data);
                setLoading(false)

            } catch (error) {
                console.error('Erro ao buscar livro:', error);
            }
        }

        axiosBooks();
    }, [id])

    if (loading === false) {
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
                    <p dangerouslySetInnerHTML={{ __html: livro?.volumeInfo.description }}></p>
                </div>

                <div className={styles.meta}>
                    <p>total de páginas: {livro?.volumeInfo.pageCount}</p>
                    <p>categorias: {livro?.volumeInfo.categories?.join(', ')}</p>
                </div>

                <div className={styles.footer}>
                    <p className={styles.price}>preço: {dinheiro.format(livro?.saleInfo?.listPrice?.amount ?? 0.00) }</p>
                    <a href={livro?.volumeInfo.previewLink} className={styles.buyLink} target="_blank" rel="noopener noreferrer">
                        Acessar
                    </a>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.book}>
                <LoadingSpinner size={140} colorStart='#146eb3' colorEnd='#B8FF00' />
            </div>
        )
    }
}