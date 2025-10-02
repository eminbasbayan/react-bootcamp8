
import { CircleX } from 'lucide-react';
import "./Modal.css";

const Modal = () => {
  return (
    <div class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Modal title</h1>
          <button type="button" class="btn-close">
            <CircleX />
          </button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Modal