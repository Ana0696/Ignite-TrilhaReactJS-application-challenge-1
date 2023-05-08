import LogoTodo from "./../../assets/LogoTodo.svg"
import styles from"./Header.module.css"

export function Header() {

    return (
      <div className={styles.header}>
        <img src={LogoTodo} alt="Logo To Do List"/>
      </div>
    )
}
  
  