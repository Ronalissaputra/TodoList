import todoLogo from "../../assets/todoLogo.svg";
import styles from "./header.module.css";
import { FaCat } from "react-icons/fa";
import { RiBearSmileFill } from "react-icons/ri";
import { useState } from "react";

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <FaCat
        style={{ width: "80px", height: "80px" }}
        className={styles.icon}
      />

      <h1 className={styles.name}> Tugas Satriani</h1>

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder="Buat tugas baru.."
          type="text"
          onChange={onChangeTitle}
          value={title}
        />
        <button>Tambah</button>
      </form>
    </header>
  );
}
