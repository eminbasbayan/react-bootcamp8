import './Button.css';

function Button({ type, size = 'default', title, children, onClick }) {
  const classNames = `btn btn-${type} btn-${size}`;

  return (
    <button className={classNames} onClick={onClick}>
      {title ? title : children}
    </button>
  );
}

export default Button;
