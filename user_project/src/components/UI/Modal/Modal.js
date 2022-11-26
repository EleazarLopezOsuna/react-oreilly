import Card from '../Card/Card';
import Button from '../Button/Button';
import './Modal.css';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={'backdrop'} onClick={props.onConfirm}/>
};

const ModalOverlay = (props) => {
  return (
    <Card className={'modal'}>
      <header className={'header'}>
        <h2>{props.title}</h2>
      </header>
      <div className={'content'}>
        <p>{props.message}</p>
      </div>
      <footer className={'actions'}>
        <Button value={'Okay'} onClick={props.onConfirm}></Button>
      </footer>
    </Card>
  );
};

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default Modal;