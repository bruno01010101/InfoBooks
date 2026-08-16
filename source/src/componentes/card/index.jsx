import styles from "./card.module.css"
import { MdOutlineStarOutline } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { FaTrashCan } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { MdLabel } from "react-icons/md";

export default function Card({icone}){

    const ic = icone == 'estrela' ? <IoIosStar />: <FaTrashCan />;

    return(
        <div className={styles.card}>
            <div className={styles.top}>
                <p>Titulo do livro</p>
                {ic}
            </div>
            <div className={styles.middle}>
                <div className={styles.anoLancamento}>
                    <FaCalendarAlt className={styles.icon}/>
                    <p>Lançamento:</p>
                    <p>2012</p>
                </div>
                <div className={styles.totalPag}>
                    <FaBook className={styles.icon} />
                    <p>Páginas:</p>
                    <p>375</p>
                </div>
                <div className={styles.categoria}>
                    <MdLabel className={styles.icon} />
                    <p>Categoria:</p>
                    <p>Brain</p>
                </div>
            </div>
        </div>
    )
}