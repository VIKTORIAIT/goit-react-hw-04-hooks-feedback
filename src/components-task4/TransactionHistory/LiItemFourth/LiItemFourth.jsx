import styles from './LiItemFourth.module.css';

const LiItemFourth = ({ id, type, amount, currency }) => {
  return (
    <tr className={styles.row} key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default LiItemFourth;
