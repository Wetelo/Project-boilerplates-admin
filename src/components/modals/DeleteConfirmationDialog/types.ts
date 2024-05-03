import type { DialogProps } from '@mui/material';

type Awaitable<T> = PromiseLike<T> | T;

export interface IDeleteConfirmationDialogProps extends Omit<DialogProps, 'children' | 'onClose'> {
  text: string;
  onConfirm: () => Awaitable<unknown>;
  onClose: () => void;
}
