// import PropTypes from "prop-types";
// import { avatar, name, isOnline, id } from "../../data/friendlist.json";

const LiItemThird = ({ avatar, name, isOnline, id }) => {
  return (
    <li key={id} className="item">
      <span className="status, {isOnline? isOnline: isOffline}"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

// LiItemThird.propTypes.arrayOf = {
//   avatar: PropTypes.string,
//   name: PropTypes.string,
//   isOnline: PropTypes.bool,
//   id: PropTypes.number,
// };

export default LiItemThird;
