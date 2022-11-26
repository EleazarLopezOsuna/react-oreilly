import './Button.css';

const Button = props => {
  return (
    <button type="submit" className={'button'} onClick={props.onClick}>{props.value}</button>
  );
};

export default Button;