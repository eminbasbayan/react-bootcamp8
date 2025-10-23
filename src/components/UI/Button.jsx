import './Button.css';

function Button({
  type,
  size = 'default',
  title,
  children,
  onClick,
  addClass,
}) {
  const classNames = `btn btn-${type} btn-${size} ${addClass}`;

  return (
    <button className={classNames} onClick={onClick}>
      {title ? title : children}
    </button>
  );
}

export default Button;
