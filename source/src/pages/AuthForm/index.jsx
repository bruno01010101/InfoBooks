import styles from './cadastro.module.css'
import Search from '../../componentes/search';
import { Link } from 'react-router';

export default function AuthForm({type = 'Cadastro'}) {
    const text = type === 'Cadastro' ? 'Já possui uma conta? Faça login' : 'Não possui uma conta? Cadastre-se';
    return(
        <div className={styles.div}>
            <form className={styles.cadastro}>
                <h1>{type}</h1>
                <div>
                    <label htmlFor='nome'  className={styles.label}>Nome</label>
                    <Search placeholder='Nome' id='nome' />
                    <label htmlFor='email' className={styles.label}>Email</label>
                    <Search placeholder='Email' id='email' />
                    <label htmlFor='senha' className={styles.label}>Senha</label>
                    <Search placeholder='Senha' type='password' id='senha' />
                </div>
                <div className={styles.btns}>
                    <button type='submit' className={styles.btn}> {type === 'Cadastro' ? 'Cadastrar' : 'Entrar'}</button>
                    <Link to={type === 'Cadastro' ? '/auth/login' : '/auth/cadastro'} className={`${styles.btn} ${styles.btnBlue}`}>{text}</Link>
                </div>
            </form>
        </div>
    )
}