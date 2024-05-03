import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useToastMessageRequest } from '@/hooks';
import { useDeleteUserMutation } from '@/services/users';
import { usersSelectors } from '@/store/users';
import { closeDeleteUserModal } from '@/store/users/slice';

export const useDeleteUserModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(usersSelectors.isDeleteUserModalOpenSelector);
  const user = useSelector(usersSelectors.selectedUserForModalSelector);
  const [deleteUser, { isSuccess, ...requestParams }] = useDeleteUserMutation();

  useToastMessageRequest({ isSuccess, ...requestParams });

  const closeModal = useCallback(() => {
    dispatch(closeDeleteUserModal());
  }, [dispatch]);

  const confirmDeleting = () => {
    deleteUser(user?.id);
  };

  useEffect(() => {
    if (isSuccess) {
      closeModal();
    }
  }, [closeModal, isSuccess]);

  return { isOpen, user, closeModal, confirmDeleting };
};
