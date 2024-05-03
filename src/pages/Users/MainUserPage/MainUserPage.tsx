import { Add } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import React from 'react';

import { DeleteUserModal } from '@/components/modals';
import { CustomTable } from '@/components/table/CustomTable';
import { UserTableItem } from '@/components/table/UserTableItem';
import { IUserResponse } from '@/types';

import { filteringFields, headCells } from './constants';
import { useMainUserPage } from './useMainUserPage';

const MainUserPage: React.FC = () => {
  const { users, goToCreateUserPage, ...tableProps } = useMainUserPage();
  return (
    <>
      <Button variant="contained" onClick={goToCreateUserPage}>
        <Add />
        <Typography ml={1} fontWeight="bold">
          Create User
        </Typography>
      </Button>
      <CustomTable
        headCells={headCells}
        filteringFields={filteringFields}
        deletingModal={DeleteUserModal}
        {...tableProps}
      >
        {users?.items.map((user: IUserResponse) => <UserTableItem {...user} key={user.id} />)}
      </CustomTable>
    </>
  );
};

export default MainUserPage;
