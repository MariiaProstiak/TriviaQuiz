import "./ErrorModal.css";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onClose} />
      <div className="error-modal">
        <h2>Attantion</h2>
        <p>{props.children}</p>
        <div className="error-modal__actions">
          <button type="button" onClick={props.onClose}>
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
