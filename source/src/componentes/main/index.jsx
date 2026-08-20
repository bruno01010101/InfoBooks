import Card from '../card'
import Search from '../search'
import styles from './main.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';
import LoadingSpinner from '../../LoadingSpinner'

export default function Main() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [valor, setValor] = useState('')
    const navigate = useNavigate();

    async function requisicao(term = 'harry potter') {
        try {
            const apiKey = import.meta.env.VITE_GOOGLE_KEY;
            const url = `https://www.googleapis.com/books/v1/volumes?q=${term}&key=${apiKey}&maxResults=12`
            const response = await axios.get(url);
            setBooks(response.data.items);
            setLoading(false);
        } catch (error) {
            console.error('Erro ao buscar livros:', error);
        }
    }

    function starClick(id){
        
        let listaFavoritos = []
        if(localStorage.getItem('id')) {
            listaFavoritos = JSON.stringify(localStorage.getItem(id))
            listaFavoritos.push(id)
            console.log([...listaFavoritos])
            localStorage.setItem('id', JSON.parse(listaFavoritos))
        }else{
            listaFavoritos = [id]
            localStorage.setItem('id', JSON.parse(listaFavoritos))
        }
    }

    useEffect(() => {
        async function axioBooks() {
            await requisicao();
        }

        axioBooks();
    }, []);

    const Enter = (e) => {

        if (e.key === 'Enter') {
            requisicao(valor);
            setLoading(true)
        }
    }

    if (loading === false) {
        return (
            <div className={styles.main}>
                <h1>Feed de livros</h1>
                <Search placeholder="Pesquise um livro." onChange={(e) => setValor(e.target.value)} onKeyDown={Enter} />
                <div className={styles.livros}>
                    {
                        books.map((book, index) => {
                            const categoria = book.volumeInfo.categories ? book.volumeInfo.categories[0].split(' ')[0] : 'Sem categoria';
                            const data = new Date(book.volumeInfo.publishedDate);
                            return (
                                <Card icone='estrela' anoLancamento={data.getFullYear()} paginas={book.volumeInfo.pageCount} autor={book.volumeInfo.authors?.[0]}
                                    titulo={book.volumeInfo.title} descricao={book.volumeInfo.description} categoria={categoria} key={index}
                                    starClick={() => starClick(book.id)}
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