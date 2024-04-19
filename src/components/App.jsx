import Profile from './Profile/Profile.jsx'
import user from './Profile/user.json'
import Statistics from './Statistics/Statistics.jsx'
import data from './Statistics/data.json'
import Friends from './Friends/Friends.jsx'
import friendsData from './Friends/friends.json'

export const App = () => 
{return (<>
            <Profile
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}/>

            <Statistics title="Upload stats"  stats={data}/>
            <br/>
            <Statistics stats={data} />
            <br/>
            <Friends friends={friendsData}/>
         </>);};
