import react from "react";
import classes from "./ErrorModal.module.css";
import Button from "./Button.jsx";
import Card from "./Card";

const ErrorModal = ({ title, message, handleDItem, handleBackDropItem }) => {
  const handleClick = (e) => {
    handleDItem(e);
  };

  const handleBackDrop = () => {
    handleBackDropItem();
  };
  return (
    <div>
      <div className={classes.backdrop} onClick={handleBackDrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2 className={classes.header}>{title}</h2>
        </header>
        <div>
          <p className={classes.content}>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={handleClick}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModal;
