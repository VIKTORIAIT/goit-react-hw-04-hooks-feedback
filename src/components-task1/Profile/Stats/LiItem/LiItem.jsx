import styles from './LiItem.module.css';
const LiItem = ({ label, quantity }) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.quantity}>{quantity}</span>
    </li>
  );
};

export default LiItem;
