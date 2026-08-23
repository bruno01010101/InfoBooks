import styles from './cadastro.module.css'
import Search from '../../componentes/search';
import { Link, useNavigate } from 'react-router';
import { login, cadastro } from '../../Auth/auth';

export default function AuthForm({type = 'Cadastro'}) {
    const text = type === 'Cadastro' ? 'Já possui uma conta? Faça login' : 'Não possui uma conta? Cadastre-se';
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const email = formData.get('email');
        const senha = formData.get('senha');

        if (type === 'Cadastro'){
            cadastro(email, senha);
            navigate('/auth/login');
        }else{
            login(email, senha);
            navigate('/');
        }
    }

    return(
        <div className={styles.div}>
            <form className={styles.cadastro} onSubmit={handleSubmit}>
                <h1>{type}</h1>
                <div>
                    <label htmlFor='nome'  className={styles.label}>Nome</label>
                    <Search placeholder='Nome' id='nome' name="nome" required />
                    <label htmlFor='email' className={styles.label}>Email</label>
                    <Search placeholder='Email' id='email' name="email" required/>
                    <label htmlFor='senha' className={styles.label}>Senha</label>
                    <Search placeholder='Senha' type='password' id='senha' name="senha" required/>
                </div>
                <div className={styles.btns}>
                    <button type='submit' className={styles.btn}> {type === 'Cadastro' ? 'Cadastrar' : 'Entrar'}</button>
                    <Link to={type === 'Cadastro' ? '/auth/login' : '/auth/cadastro'} className={`${styles.btn} ${styles.btnBlue}`}>{text}</Link>
                </div>
            </form>
        </div>
    )
}