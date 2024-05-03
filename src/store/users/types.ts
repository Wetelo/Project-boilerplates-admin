import type { IUserResponse } from '@/types';

export interface IUsersState {
  isDeleteUserModalOpen: boolean;
  selectedUserForModal: IUserResponse | null;
}
