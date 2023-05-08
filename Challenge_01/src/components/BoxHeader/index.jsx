import styles from "./BoxHeader.module.css"

export function BoxHeader(props){

console.log(props)


    return(
        <div className={styles.boxHeader}>
            <div className={styles.wrapper}>
                <span className={styles.createdChores}>
                    Tarefas Criadas
                </span>

                <div className={styles.counterCreatedChores}>
                    <span>
                        {props.content.length}
                    </span>
                </div>
            </div>

            <div className={styles.wrapper}>
                <span className={styles.concludedChores}>
                    Concluídas
                </span>

                <div className={styles.counterConcludedChores}>
                    <span>
                        {props.content.filter(content => content.check ).length}
                    </span>
                    <span> de </span>
                    <span>{props.content.length}</span>
                </div>
            </div>
            
        </div>
    )
}