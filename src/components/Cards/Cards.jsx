import styles from'./cards.module.css'

function Cards({ lessons, index }) {

  return (
    <div className={styles.cards} key={index}>
      <h3>{lessons.title}</h3>
      <p>Type: {lessons.type}</p>
      {lessons.keyPoints !== undefined ? (
        <>
          <p>Key points : </p>
          <ul className={styles.list}>
            {lessons.keyPoints.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <p>Links: </p>
          <ul className={styles.list}>
            {lessons.links.map((e, i) => (
              <li key={i}>
                <a href={e[1]}>{e[0]}</a>
              </li>
            ))}
          </ul>
        </>
      )}
      {lessons.youtube !== undefined ? (
        <p>
          <a href={lessons.youtube}>YouTube</a>
        </p>
      ) : null}
    </div>
  );
}
export default Cards;
