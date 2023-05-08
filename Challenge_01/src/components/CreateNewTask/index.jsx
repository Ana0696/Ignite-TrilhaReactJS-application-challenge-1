import { useState } from "react";
import { CreateButton } from "../CreateButton/index"

import styles from "./CreateNewTask.module.css"



export function CreateNewTask(props){

    const [newTaskContent, setNewTaskContent] = useState('')

    function handleNewTaskContent(){
        event.target.setCustomValidity('');
        setNewTaskContent(event.target.value);
    }

    function handleCreateTask(){
        event.preventDefault();

        setComments([...props.content, newTaskContent]);
        setNewTaskContent('');
    }

    return(
        <div className={styles.createTaskBox}>
            <input 
                className={styles.inputTextBox} 
                placeholder="Adicione uma nova tarefa"
                value={newTaskContent}
                onChange={handleNewTaskContent}
                required
            />

            <CreateButton onClick ={handleCreateTask}/>
        </div>
    )
}