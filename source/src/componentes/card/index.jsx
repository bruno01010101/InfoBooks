import styles from "./card.module.css"
import { MdOutlineStarOutline, MdLabel } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { FaTrashCan } from "react-icons/fa6";
import { FaBook, FaUser, FaCalendarAlt } from "react-icons/fa";

export default function Card({icone, anoLancamento, paginas, categoria, autor, descricao, titulo, textLimit = 200, onClick} ) {

    const ic = icone == 'estrela' ? <IoIosStar />: <FaTrashCan />;

    return(
        <div className={styles.card} onClick={onClick}>
            <div className={styles.top}>
                <p>{titulo}</p>
                {ic}
            </div>
            <div className={styles.middle}>
                <div>
                    <FaCalendarAlt className={styles.icon}/>
                    <p>Lançamento:</p>
                    <p>{anoLancamento}</p>
                </div>
                <div>
                    <FaBook className={styles.icon} />
                    <p>Páginas:</p>
                    <p>{paginas}</p>
                </div>
                <div>
                    <MdLabel className={styles.icon} />
                    <p>Categoria:</p>
                    <p>{categoria}</p>
                </div>
            </div>
            <div className={styles.autor}>
                <FaUser className={styles.person} />
                <p>Autor: {autor}</p>
            </div>
            <p className={styles.descricao}>
                {typeof(descricao) === 'string' ? descricao.slice(0, textLimit) + '...' : descricao}
            </p>
        </div>
    )
}