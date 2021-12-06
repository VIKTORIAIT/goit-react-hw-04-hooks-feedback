// import data from "../../data/data.json";

const LiItemsecond = ({ label, percentage }) => {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

// LiItemsecond.propTypes = {};

export default LiItemsecond;
