import PropTypes from 'prop-types';
import defaultImage from '../default.jpg';
import s from './FriendListItem.module.css';

function FriendListItem({ avatar = defaultImage, name, isOnline }) {
  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={{ backgroundColor: isOnline ? '#008000' : '	#FF0000' }}
      ></span>
      <img
        className={s.avatar}
        src={avatar ?? defaultImage}
        alt={name}
        width="48"
      />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
