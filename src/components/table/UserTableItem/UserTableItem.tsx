import { Delete, Edit } from '@mui/icons-material';
import { colors, IconButton, TableCell, TableRow } from '@mui/material';
import { format } from 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';

import { useTableItem } from '@/hooks';
import { IUserResponse } from '@/interfaces';
import { openDeleteUserModal } from '@/store/users/slice';

const UserTableItem: React.FC<IUserResponse> = (user) => {
  const { id, firstName, lastName, email, role, createdAt } = user;

  const { onEdit, onDelete } = useTableItem(openDeleteUserModal);

  const createdDate = format(new Date(createdAt), 'dd.MM.yyyy');

  return (
    <TableRow>
      <TableCell component="th" scope="row" width={100}>
        <Link to={`edit/${id}`} style={{ textDecoration: 'none', color: colors.blue[600] }}>
          {id}
        </Link>
      </TableCell>
      <TableCell align="left">{firstName}</TableCell>
      <TableCell align="left">{lastName}</TableCell>
      <TableCell align="left">{email}</TableCell>
      <TableCell align="left" width={100}>
        {role}
      </TableCell>
      <TableCell align="left" width={150}>
        {createdDate}
      </TableCell>
      <TableCell>
        <IconButton onClick={onEdit(id ?? '')}>
          <Edit />
        </IconButton>
        <IconButton onClick={onDelete(user ?? '')}>
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default UserTableItem;
