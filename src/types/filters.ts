import { TSortingFields } from './sorting';

export enum FilterTypes {
  Text = 'text',
  Select = 'select',
  Date = 'date',
}

export interface FilterValues {
  label: string;
  value: number | string | boolean;
}

export interface FilterItem {
  name: string;
  type: FilterTypes;
  defaultValue?: string;
  values?: FilterValues[];
}

export type FiltersType = Array<null | FilterItem>;

export type FiltersChangeFunc = (key: string, value: string | number | Date) => void;

export type SortFilterChangeFunc = (cellName: TSortingFields) => void;
