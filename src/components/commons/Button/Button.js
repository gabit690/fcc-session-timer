import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './Button.css';

const Button = (props) => {

  let {id, type, action, value, disabled} = props;

  return (
    <button 
      id={id} 
      className={type}
      onClick={action}
      disabled={disabled}
    >
      {value}
    </button>
  );
  
};

export default Button;