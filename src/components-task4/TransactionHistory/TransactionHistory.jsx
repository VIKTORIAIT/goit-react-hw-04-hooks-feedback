import PropTypes from "prop-types";
import transaction from "../../data/transaction.json";
import LiItemFourth from "../LiItemFourth";

const TransactionHistory = () => {
  //   const { id, type, amount, currency } = transaction;
  const markupTr = transaction.map(({ id, type, amount, currency }) => {
    return (
      <LiItemFourth key={id} type={type} amount={amount} currency={currency} />
    );
  });
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{markupTr}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default TransactionHistory;
