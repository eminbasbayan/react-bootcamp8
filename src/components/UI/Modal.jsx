import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CircleX } from 'lucide-react';
import './Modal.css';

const Modal = ({
  title = 'Modal Title',
  description = 'Modal Description',
  setIsShowModal,
}) => {
  const [count, setCount] = useState(0);
  function handleClose() {
    setIsShowModal(false);
  }

  useEffect(() => {
    // const websocketconnect = new WebSocket();

    let i = 0;

    const id = setInterval(() => {
      i += 1;
      setCount(i);
      console.log(i);
    }, 1000);

    // websocketconnect.OPEN()
    console.log("component DOM'a yüklendiğinde çalıştı!");

    // clean-up function
    return () => {
      // websocketconnect.CLOSING();
      console.log("component DOM'dan kaldırıldığında çalıştı!");
      clearInterval(id);
    };
  }, []);

  return createPortal(
    <div className="modal fade">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">
              {title} {count}
            </h1>
            <button type="button" className="btn-close" onClick={handleClose}>
              <CircleX />
            </button>
          </div>
          <div className="modal-body">{description}</div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={handleClose}
              className="btn btn-secondary"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
      <div className="modal-overlay" onClick={handleClose}></div>
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
