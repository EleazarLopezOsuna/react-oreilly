import Card from '../UI/Card/Card';
import './User.css'

const User = props => {
  return (
    <li>
      <Card className='user-item'>
        <div className="user-item__description">
          <h2>{props.username} ({props.age} years old)</h2>
        </div>
      </Card>
    </li>
  );
};

export default User;