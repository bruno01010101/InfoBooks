import Card from '../card'
import Search from '../search'
import styles from './main.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';

export default function Main() {
    const [books, setBooks] = useState([]);
    const apiKey = import.meta.env.VITE_GOOGLE_KEY;
    const navigate = useNavigate();

    async function requisicao(term = 'game of thrones') {
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term}&key=${apiKey}&maxResults=12`);
            setBooks(response.data.items);
        } catch (error) {
            console.error('Erro ao buscar livros:', error);
        }
    }

    useEffect(() => {
        async function axioBooks() {
            await requisicao();
        }
        
        axioBooks();
    }, []);


    return(
        <div className={styles.main}>
            <h1>Feed de livros</h1>
            <Search  placeholder="Pesquise um livro." />
            <div className={styles.livros}>
                {
                    books.map((book, index) => {
                        const categoria = book.volumeInfo.categories ? book.volumeInfo.categories[0].split(' ')[0] : 'Sem categoria';
                        const data = new Date(book.volumeInfo.publishedDate);
                        return (
                            <Card icone='estrela' anoLancamento={data.getFullYear()} paginas={book.volumeInfo.pageCount} autor={book.volumeInfo.authors?.[0]} 
                              titulo={book.volumeInfo.title}  descricao={book.volumeInfo.description} categoria={categoria} key={index} 
                              onClick={() => navigate(`/book/${book.id}`)}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}