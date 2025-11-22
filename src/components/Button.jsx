function Button(props) {
  return (
    <>
      <button
        type="button"
        onClick={props.onClick}
        className={`btn ${props.className == undefined ? "" : props.className}`}
      >
        {props.name}
      </button>
    </>
  );
}

export default Button;
