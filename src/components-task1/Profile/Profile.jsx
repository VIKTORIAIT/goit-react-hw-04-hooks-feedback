// import PropTypes from "prop-types";
import styles from "./Profile.module.css";
import Descriptions from "../Descriptions";
import Stats from "../Stats";

const Profile = () => {
  return (
    <div class={styles.profile}>
      <Descriptions />
      <Stats />
    </div>
  );
};

export default Profile;
