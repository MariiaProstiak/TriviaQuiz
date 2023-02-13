import "./ErrorModal.css";
import Backdrop from "./Backdrop";

const ErrorModal = (props) => {
  return (
    <div>
      <Backdrop onClick={props.onClose} />
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
