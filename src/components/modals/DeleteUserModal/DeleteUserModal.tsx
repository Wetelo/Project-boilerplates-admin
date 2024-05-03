import React from 'react';

import { DeleteConfirmationDialog } from '@/components';

import { useDeleteUserModal } from './useDeleteUserModal';

const DeleteUserModal: React.FC = () => {
  const { isOpen, user, closeModal, confirmDeleting } = useDeleteUserModal();
  return (
    <DeleteConfirmationDialog
      open={isOpen}
      onClose={closeModal}
      onConfirm={confirmDeleting}
      text={`Are you sure you want to delete ${user?.firstName ?? ''} user?`}
    />
  );
};

export default DeleteUserModal;
