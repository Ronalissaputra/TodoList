import styles from "./task.module.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

export function Task({ task, onDelete, onComplete }) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <RiDeleteBin6Line size={20} />
      </button>
    </div>
  );
}
