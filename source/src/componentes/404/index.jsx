import styles from './404.module.css'
import { Link } from 'react-router';

export default function NotFound({ onBackHome }) {
  return (
    <div className={styles.notfound}>
      <div className={styles.notfound__glitch} data-text="404">404</div>
      <h1 className={styles.notfound__title}>Essa página não existe.</h1>
      <p className={styles.notfound__text}>
        O link que você seguiu deve ter se perdido em algum commit por aí.
      </p>
      <Link to="/" className={styles.notfound__button} onClick={onBackHome}>
        Voltar pro início
      </Link>
    </div>
  )
}