import React, { ReactNode } from 'react';

export interface ModalProps {
  modalBody: ReactNode;
}

const Modal = ({ modalBody }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>

          <div className="modal-body">{modalBody}</div>
        </div>
      </div>
    </div>
  )
};

export default Modal;