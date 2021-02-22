import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const Button = (props) => {

  let {id, type, action, value} = props;

  return (
    <button 
      id={id} 
      className={type}
      onClick={action}
    >
      {value}
    </button>
  );
  
};

export default Button;