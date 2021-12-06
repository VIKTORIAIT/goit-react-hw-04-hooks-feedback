import styles from "./Stats.module.css";
import PropTypes from "prop-types";
import LiItem from "../LiItem";
import user from "../../data/user.json";

const Stats = () => {
  const { stats } = user;
  return (
    <ul>
      <LiItem label="followers :" quantity={stats.followers} />
      <LiItem label="views :" quantity={stats.views} />
      <LiItem label="likes :" quantity={stats.likes} />
    </ul>
  );
};

Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
export default Stats;
