import { CircleX } from 'lucide-react';
import './Modal.css';

const Modal = ({
  title = 'Modal Title',
  description = 'Modal Description',
  setIsShowModal,
}) => {
  function handleClose() {
    setIsShowModal(false);
  }

  return (
    <div class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">{title}</h1>
            <button type="button" class="btn-close" onClick={handleClose}>
              <CircleX />
            </button>
          </div>
          <div class="modal-body">{description}</div>
          <div class="modal-footer">
            <button
              type="button"
              onClick={handleClose}
              class="btn btn-secondary"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
      <div className="modal-overlay" onClick={handleClose}></div>
    </div>
  );
};

export default Modal;
