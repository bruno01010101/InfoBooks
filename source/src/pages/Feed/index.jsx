import { Outlet } from 'react-router'
import styles from './feed.module.css'
import Header from '../../componentes/header'
import Navigation from '../../componentes/navigation'

export default function Feed() {
    return(
        <main className={styles.main}>
            <Header />
            <Navigation />
            <Outlet />
        </main>
    )
}