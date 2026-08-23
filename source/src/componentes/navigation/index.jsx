import styles from './navigation.module.css'
import { MdFeed } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { Link } from 'react-router';
import {logOut} from "../../Auth/auth.js"

export default function Navigation() {
    return (
        <section className={styles.navigation}>
            <Link to="/"><MdFeed /> </Link>

            <Link to="/favorites">
                <IoStar />
            </Link>

            <Link to="/auth/login">
                <FaUser />
            </Link>
            
            <Link to="/auth/login" onClick={logOut}>
                <ImExit />
            </Link>

        </section>
    )
}