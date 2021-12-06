import styles from "./Descriptions.module.css";
import PropTypes from "prop-types";
import user from "../../data/user.json";

const Descriptions = () => {
  const { username, tag, location, avatar } = user;
  return (
    <div className={styles.description}>
      <img src={avatar} alt="User avatar" className={styles.avatar} />
      <p className={styles.name}>{username}</p>
      <p className={styles.tag}>{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
};

Descriptions.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
};

export default Descriptions;
