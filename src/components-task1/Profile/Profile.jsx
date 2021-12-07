import styles from './Profile.module.css';
import Descriptions from './Descriptions';
import Stats from './Stats';
import PropTypes from 'prop-types';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <Descriptions />
      <Stats />
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
