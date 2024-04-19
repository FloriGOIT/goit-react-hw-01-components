import PropTypes from 'prop-types'
import user from '../Profile/user.json'
import css from '../Profile/Profile.module.css'

const Profile = (props) =>
{
const {username, tag, location, avatar, stats:{followers, views, likes} } = user;
return(     
        <div className={css.profile}>
            <div className={css.description}>
                <img
                src={avatar}
                alt={username}
                className={css.avatar}
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li>
                   <span className={css.label}>Followers</span>
                   <span className={css.quantity}>{followers}</span>
                </li>
                <li>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{views}</span>
                </li>
                <li>
                   <span className={css.label}>Likes</span>
                   <span className={css.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
        )
}

Profile.propTypes={props:PropTypes.objectOf(PropTypes.shape({username: PropTypes.string.isRequired,
                                                             tag: PropTypes.string.isRequired,
                                                             location: PropTypes.string.isRequired,
                                                             avatar: PropTypes.string.isRequired,
                                                             stats: PropTypes.object.isRequired}))}

export default Profile