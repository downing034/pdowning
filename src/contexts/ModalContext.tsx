import { Modal } from 'components/library';
import React, {
  useState,
  ReactNode,
  createContext,
  useContext,
  useRef,
} from 'react';

export interface ModalContextData {
  openModal: (modal: JSX.Element) => void;
  closeModal: () => void;
}

export const modalContextInitialValue: ModalContextData = {
  openModal: () => null,
  closeModal: () => null,
};

export const ModalContext = createContext<ModalContextData>(
  modalContextInitialValue
);

interface ModalContextProviderProps {
  children: ReactNode;
}

export const ModalContextProvider: React.FC<ModalContextProviderProps> = ({ children }) => {
  const [currentModal, setCurrentModal] = useState<JSX.Element | null>(null);

  const openModal = (modalBodyComponent: JSX.Element) => {
    const wrappedComponent = (
      // allows for common modal styling with adjustable
      // contents for customization
      <div
        className="main-modal"
        tab-index="-1"
        role="dialog"
        aria-hidden="true"
        onClick={() => closeModal()}
      >
        <div className="modal-dialog modal-fullscreen-sm-down">
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => closeModal()}
              >
                  <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{modalBodyComponent}</div>
          </div>
        </div>
      </div>
    );

    setCurrentModal(wrappedComponent);
  };

  const closeModal = () => {
    setCurrentModal(null);
  };

  return (
    <ModalContext.Provider
      value={{ openModal, closeModal }}
    >
      {currentModal ? currentModal : null}
      {children}
    </ModalContext.Provider>
  );
};

// Context Hook
export function useModalLauncher<T = null>() {
  return {
    ...useContext(ModalContext),
  };
}
