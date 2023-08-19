export type ToastType = 'common' | 'success' | 'error' | 'warning';

export interface ToastData {
  text: string;
  type: ToastType;
}
