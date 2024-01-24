import styles from "./Display.module.css";

const Display = ({ dispv }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={dispv}
      readOnly
    ></input>
  );
};

export default Display;
