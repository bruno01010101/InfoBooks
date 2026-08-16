import styles from './navigation.module.css'
import { MdFeed } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { ImExit } from "react-icons/im";

export default function Navigation() {
    return(
        <section className={styles.navigation}>
            <MdFeed />     
            <IoStar />
            <FaUser />
            <ImExit />

        </section>
    )
}