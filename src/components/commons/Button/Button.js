import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './Button.css';

const Button = (props) => {

  let {id, action, value, disabled} = props;

  return (
    <div className="container-fluid d-flex p-0">
      <button 
        id={id} 
        className=""
        onClick={action}
        disabled={disabled}
      >
        {value}
      </button>
    </div>
  );
  
};

export default Button;