import { IUserResponse } from '@/interfaces';

export interface IUsersState {
  isDeleteUserModalOpen: boolean;
  selectedUserForModal: IUserResponse | null;
}
