import styles from "./LiItem.module.css";
const LiItem = ({ label, quantity }) => {
  return (
    <li>
      <span className="label">{label}</span>
      <span className="quantity">{quantity}</span>
    </li>
  );
};

export default LiItem;
