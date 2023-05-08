import { PlusCircle } from "phosphor-react"
import styles from "./CreateButton.module.css"



export function CreateButton(){
    
    function handleCreateButton(){
        console.log('Btn working')
    }

    return(
        <div className={styles.button}>
            <button
                className={styles.button}
                onClick={handleCreateButton}
            >
                <span>Criar</span>

                 <PlusCircle size={16}/>
            </button>
        </div>
    )
}