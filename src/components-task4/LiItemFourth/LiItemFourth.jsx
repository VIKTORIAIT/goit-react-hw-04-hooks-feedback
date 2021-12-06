// import PropTypes from "prop-types";

const LiItemFourth = ({ id, type, amount, currency }) => {
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

// LiItemFourth.propTypes = {};

export default LiItemFourth;
