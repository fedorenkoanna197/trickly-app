import Cards from "../Cards/Cards";
import ErrorBoundary from "../Error/Error";
import styles from './page.module.css';
const CoursePage = ({ lessons, error }) => {
  return (
    <ErrorBoundary>
      <article>
        {lessons && error.error === false ? (
          (
          lessons.map((element, i) => (
           <Cards lessons={element} index={i} key={i} />
          )))
        ) : error.error && <p className={styles.error}>Error: {error.message}</p>
        }
      </article>
    </ErrorBoundary>
  );
};
export default CoursePage;
