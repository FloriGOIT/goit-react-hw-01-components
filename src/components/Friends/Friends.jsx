import PropTypes from 'prop-types'
import css from './Friends.module.css'

const Friends = ({friends}) =>
{ 
   return (<>
             <ul className={css['friend-list']}>
                {friends.map( ({avatar, name, isOnline, id}) => 
                                             <li className={css.item} key={id}>
                                                <span className={css.status}>{isOnline ? `💚` : `❤️`}</span>
                                                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                                                <p className={css.name}>{name}</p>
                                              </li>)}
            </ul>
          </>)}
 Friends.propTypes={friends:PropTypes.arrayOf(PropTypes.shape({avatar:PropTypes.string.isRequired,
                                                               name:PropTypes.string.isRequired,
                                                               isOnline:PropTypes.bool.isRequired,
                                                               id:PropTypes.number.isRequired}))}

export default Friends

