import Card from '../../componentes/card'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';
import LoadingSpinner from '../../LoadingSpinner'
import styles from './favorites.module.css';

export default function Favorites() {
    const temp = localStorage.getItem('id') ? JSON.parse(localStorage.getItem('id')) : [];
    const [books, setBooks] = useState([]);
    const [lista, setLista] = useState(temp)
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function requisicoes() {
            try {
                const apiKey = import.meta.env.VITE_GOOGLE_KEY;

                const responses = await Promise.all(
                    lista.map(id =>
                        axios.get(
                            `https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`
                        )
                    )
                );

                setBooks(responses.map(response => response.data));
            } catch (error) {
                console.error('Erro ao buscar livros:', error);
            } finally {
                setLoading(false);
            }
        }
        requisicoes()
    }, [lista])

    function excluirLivro(id) {
        const novaLista = lista.filter(i => i != id);
        setLista(novaLista);
        setBooks(prev => prev.filter(book => book.id !== id))
        localStorage.setItem('id', JSON.stringify(lista))
    }


    if (loading === false) {
        return (
            <div className={styles.main}>
                <h1>Seus Livros Favoritos.</h1>
                <div className={styles.livros}>
                    {
                        books.map((book, index) => {
                            const categoria = book.volumeInfo.categories ? book.volumeInfo.categories[0].split(' ')[0] : 'Sem categoria';
                            const data = new Date(book.volumeInfo.publishedDate);
                            return (
                                <Card anoLancamento={data.getFullYear()} paginas={book.volumeInfo.pageCount} autor={book.volumeInfo.authors?.[0]}
                                    titulo={book.volumeInfo.title} descricao={book.volumeInfo.description} categoria={categoria} key={index}
                                    starClick={() => excluirLivro(book.id)}
                                    onClick={() => navigate(`/book/${book.id}`)
                                    }
                                />
                            );
                        })
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.main}>
                <LoadingSpinner size={140} colorStart='#146eb3' colorEnd='#B8FF00' />
            </div>
        )
    }
}