import Card from '../UI/Card/Card';
import User from './User';
import './UserList.css';

const UserList = props => {
  return (
    <Card className="users">
      <ul className="users-list">
        <Card>
          {props.users.map((user, index) => (
            <User
              key={index}
              username={user.username}
              age={user.age}
            />
          ))}
        </Card>
      </ul>
    </Card>
  );
};

export default UserList;