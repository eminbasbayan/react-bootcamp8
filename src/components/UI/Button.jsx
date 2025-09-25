import './Button.css';

function Button({ type, size="default", title, children }) {
  const classNames = `btn btn-${type} btn-${size}`;

  return <button className={classNames}>{title ? title : children}</button>;
}

export default Button;
