import Form from './Form';
import './NewUser.css';
import Modal from '../UI/Modal/Modal';
import {useState} from 'react';

const NewUser = props => {
  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <Modal title={error['title']} message={error['message']} onConfirm={errorHandler}/>}
      <div className="new-user">
        <Form onNewUser={props.onNewUser} onRaisingError={setError}/>
      </div>
    </div>
  );
};

export default NewUser;