
import { Circle, Trash } from "phosphor-react"
import { useState } from "react"

import styles from "./TaskCard.module.css"



export function TaskCard(){

    

    const [taskDescription, setTaskDescription] = useState([
        'example'
    ]);

    function handleCheckTask(){
        console.log('btn check')
    }

    function showText(){
        return taskDescription;
    }

    function handleDeleteTask() {
        console.log('btn delete')
    }

    return(
        <div className={styles.taskCard}>
            <button>
                <Circle 
                    className={styles.btnCheck}
                    onClick={handleCheckTask}
                    />
            </button>

            <div> {showText()} </div>

            <button className={styles.trash}>
                <Trash 
                    size={24}
                    onClick={handleDeleteTask}
                />
            </button>
        </div>
    )
}