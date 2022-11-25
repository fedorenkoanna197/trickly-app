import styles from "./form.module.css";
const Form = ({ handledBlur }) => {
  return (
    <form>
      <label className={styles.label} htmlFor="search">
        Enter a keyword for the search of lessons
      </label>
      <input
        className={styles.input}
        id="search"
        placeholder="Enter keyword"
        onBlur={(e) => handledBlur(e.target.value)}
        type="text"
      />
    </form>
  );
};
export default Form;
