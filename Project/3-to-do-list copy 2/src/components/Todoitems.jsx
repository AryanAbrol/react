import Todoitem from "./Todoitem";
import styles from "./Todoitems.module.css";

const Todoitems = ({ todolist, onDeleteClick }) => {
  return (
    <div className={styles.itemcontainer}>
      {todolist.map((todolist) => (
        <Todoitem
          key={todolist.tname}
          name={todolist.tname}
          date={todolist.tdate}
          onDeleteClick={onDeleteClick}
        ></Todoitem>
      ))}
    </div>
  );
};

export default Todoitems;
