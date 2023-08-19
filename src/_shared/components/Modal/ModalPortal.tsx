import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

const ModalPortal = ({ children }: PortalProps) => {
  const element = document.getElementById('modal-root');
  if (!element) return null;
  return ReactDOM.createPortal(children, element);
};

export default ModalPortal;
