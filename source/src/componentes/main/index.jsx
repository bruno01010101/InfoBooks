import Card from '../card'
import Search from '../search'
import styles from './main.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';
import LoadingSpinner from '../../LoadingSpinner'

export default function Main({isFavorite = false}) {
    const parsing = localStorage.getItem('id') ? JSON.parse(localStorage.getItem('id')) : []

    const [lista, setLista] = useState(parsing)
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [valor, setValor] = useState('')
    const apiKey = import.meta.env.VITE_GOOGLE_KEY;

    const navigate = useNavigate();

    async function requisicao(url = `https://www.googleapis.com/books/v1/volumes?q=harry potter&key=${apiKey}&maxResults=12`) {
        try {
            const response = await axios.get(url);
            setBooks(response.data.items);
            setLoading(false);
        } catch (error) {
            console.error('Erro ao buscar livros:', error);
        }
    }

    function starClick(id) {
        let listaFavoritos = []
        if (localStorage.getItem('id')) {
            listaFavoritos = JSON.parse(localStorage.getItem('id'))
            if (listaFavoritos.indexOf(id) == -1) {
                listaFavoritos.push(id)
                localStorage.setItem('id', JSON.stringify(listaFavoritos))
            }
            else {
                return
            }
        } else {
            listaFavoritos.push(id)
            localStorage.setItem('id', JSON.stringify(listaFavoritos))
        }
    }

    {/* Retirar isFavorite do useEffect, tirar o setloading(false) de requisição */}
    useEffect(() => {
        if (!isFavorite) {
            async function axioBooks() {
                await requisicao();
            }

            axioBooks();
        }
        
        else {
            lista.forEach(async (id) => {
                try {
                    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`);
                    setBooks((prev) => [...prev, response.data]);
                    setLoading(false)
                    
                } catch (error) {
                    console.error('Erro ao buscar livro:', error);
                }
            })
        }

    }, []);

    const Enter = (e) => {

        if (e.key === 'Enter') {

            requisicao(`https://www.googleapis.com/books/v1/volumes?q=${valor}&key=${apiKey}&maxResults=12`);
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