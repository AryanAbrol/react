import styles from "./Buttoncontainer.module.css";

const Buttoncontainer = () => {
  const button = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonscontainer}>
      {button.map((buttons) => (
        <button className={styles.button}>{buttons}</button>
      ))}
    </div>
  );
};

export default Buttoncontainer;
