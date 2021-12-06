import PropTypes from "prop-types";
import data from "../../data/data.json";
import LiItemsecond from "../LiItemsecond/LiItemsecond";

const Statistics = () => {
  const markup = data.map(({ id, label, percentage }) => (
    <LiItemsecond key={id} label={label} percentage={percentage} />
  ));
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">{markup}</ul>
    </section>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
export default Statistics;
