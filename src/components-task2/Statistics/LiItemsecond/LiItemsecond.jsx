import styles from './LiItemsecond.module.css';

const LiItemsecond = ({ label, percentage }) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

export default LiItemsecond;
