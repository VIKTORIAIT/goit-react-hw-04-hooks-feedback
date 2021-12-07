import styles from './LiItemThird.module.css';
const LiItemThird = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} className={styles.item}>
      <span
        className={`${styles.span} ${
          isOnline ? styles.isOnline : styles.isOffline
        }`}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default LiItemThird;
