import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import React from 'react';

import type { IDeleteConfirmationDialogProps } from './types';
import useDeleteConfirmationDialog from './useDeleteConfirmationDialog';

const DeleteConfirmationDialog: React.FC<IDeleteConfirmationDialogProps> = ({
  open,
  text,
  onClose,
  onConfirm,
  ...props
}) => {
  const { isLoading, handleConfirm } = useDeleteConfirmationDialog(onConfirm);
  return (
    <Dialog open={open} onClose={onClose} {...props} PaperProps={{ sx: { padding: '8px 16px' } }}>
      <DialogTitle>{text}</DialogTitle>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleConfirm} autoFocus variant="contained" color="error" disabled={isLoading}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;
