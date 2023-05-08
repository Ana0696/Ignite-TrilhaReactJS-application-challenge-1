import { useState } from "react"

import { CreateNewTask } from "../CreateNewTask"
import { BoxHeader } from "./../BoxHeader"
import { TaskList } from "./../TaskListBox"
import { EmptyList } from "./../EmptyListBox"

import styles from "./TaskBoard.module.css"


export function TaskBoard(){

    const [tasks, setTasks] = useState([
        {
            id: 0,
            taskContent: 'text',
            check: true
        }  

    ])

    const handleAddNewTask = (item) => {
        setTasks([...tasks, item]);
      }

    return ( 
        <div className={styles.boardBody}>
            <div>
                <CreateNewTask content={tasks} onAddTask={handleAddNewTask}/> 
            </div>
            
            <div className={styles.taskBox}>
                <div className={styles.header}>
                    <BoxHeader content={tasks}/>
                </div>
                
                <div className={styles.body}>
                    <TaskList content={tasks}/>
                </div>
            </div>
        </div>
    )
}