import './Form.css';
import {useState} from 'react';
import Button from '../UI/Button/Button';

const Form = props => {
  const [userData, setUserData] = useState({
    username: '',
    age: '',
  });

  const handleInputChange = event => {
    setUserData(prevState => {
      return {...prevState, [event.target.name]: event.target.value};
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (userData.username === '' || userData.age === '') {
      props.onRaisingError({
        title: 'Error',
        message: 'You must enter a username and an age',
      })
      setUserData({username: '', age: ''});
      return;
    }
    if (userData.age < -1){
      props.onRaisingError({
        title: 'Error',
        message: 'You must enter a valid age',
      })
      setUserData({username: '', age: ''});
      return;
    }
    props.onNewUser(userData);
    setUserData({username: '', age: ''});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={'new-user__controls'}>
        <div className={'new-user__control'}>
          <label>Username</label>
          <input type="text" value={userData.username} name={'username'} onChange={handleInputChange}/>
        </div>
        <div className={'new-user__control'}>
          <label>Age(Years)</label>
          <input type="number" value={userData.age} name={'age'} onChange={handleInputChange}/>
        </div>
        <Button value={'Add User'}/>
      </div>
    </form>
  );
};

export default Form;