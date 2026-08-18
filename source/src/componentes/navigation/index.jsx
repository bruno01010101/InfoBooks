import styles from './navigation.module.css'
import { MdFeed } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import {Link} from 'react-router';

export default function Navigation() {
    return(
        <section className={styles.navigation}>
            <Link to="/"><MdFeed /> </Link>    
            <IoStar />
            <FaUser />
            <ImExit />

        </section>
    )
}