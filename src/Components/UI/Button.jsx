import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button>
      <button
        className={classes.button}
        type={props.type || "button"}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </button>
  );
};
export default Button;
