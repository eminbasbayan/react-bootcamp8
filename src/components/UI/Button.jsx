import './Button.css';

function Button({ type, size, title }) {
  const classNames = `btn btn-${type} btn-${size}`;

  return <button className={classNames}>{title}</button>;
}

export default Button;
