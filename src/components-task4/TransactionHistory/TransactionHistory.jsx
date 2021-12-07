import PropTypes from 'prop-types';
import LiItemFourth from './LiItemFourth';
import styles from './Transaction.module.css';

const TransactionHistory = ({ transactions }) => {
  const markupTr = transactions.map(({ id, type, amount, currency }) => {
    return (
      <LiItemFourth key={id} type={type} amount={amount} currency={currency} />
    );
  });
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th className={styles.th}>Type</th>
          <th className={styles.th}>Amount</th>
          <th className={styles.th}>Currency</th>
        </tr>
      </thead>
      <tbody>{markupTr}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};

export default TransactionHistory;
