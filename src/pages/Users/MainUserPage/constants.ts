import type { FiltersType } from '@/types';
import { FilterTypes } from '@/types';

export const headCells = [
  { title: 'Id', width: 100 },
  { title: 'First Name', width: 180 },
  { title: 'Last Name', width: 180 },
  { title: 'Email', width: 240 },
  { title: 'Role', width: 130 },
  { title: 'Created', width: 130 },
  { title: '', width: 100 },
];

export const filteringFields: FiltersType = [
  { name: 'id', type: FilterTypes.Text },
  { name: 'firstName', type: FilterTypes.Text },
  { name: 'lastName', type: FilterTypes.Text },
  { name: 'email', type: FilterTypes.Text },
  {
    name: 'role',
    type: FilterTypes.Select,
    values: [
      { label: 'Admin', value: 'admin' },
      { label: 'SuperAdmin', value: 'superAdmin' },
    ],
  },
  { name: 'createdAt', type: FilterTypes.Date },
  null,
];
