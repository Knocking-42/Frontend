export type ToastType = 'common' | 'success' | 'error' | 'warning';

export interface ToastData {
  id: number;
  text: string;
  type: ToastType;
}
