import LiItemThird from "../LiItemThird";
import friends from "../../data/friendlist.json";
import PropTypes from "prop-types";

const FriendList = () => {
  const markupFriends = friends.map(({ avatar, name, isOnline, id }) => (
    <LiItemThird key={id} avatar={avatar} name={name} isOnline={isOnline} />
  ));
  return <ul className="friend-list">{markupFriends}</ul>;
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendList;
