import { createContext } from 'react';

interface Props {
  onClose: () => void;
}

export const DrawerContext = createContext<Props>({ onClose: () => {} });
