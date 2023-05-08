import Clipboard from "./../../assets/Clipboard.svg";

import styles from "./EmptyListBox.module.css"

export function EmptyList(){
    return(
        <div className={styles.emptyBoard}>
            <img src={Clipboard} alt="Clipboard"/>
            
            <span className={styles.line1}>
                Você ainda não tem tarefas cadastradas.
            </span>
            <span className={styles.line2}>
                Crie tarefas e organize seus itens a fazer.
            </span>
        </div>
    )
}