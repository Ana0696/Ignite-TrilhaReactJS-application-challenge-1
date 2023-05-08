
import { TaskCard } from "../TaskCard"

import styles from "./TaskListBox.module.css"

export function TaskList(){
    return(
        <div className={styles.ListBox}>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
        </div>
    )
}