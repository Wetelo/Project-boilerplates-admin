import { FilterItem } from '@/interfaces';
import { FiltersChangeFunc } from '@/types';

export interface IDateFilterProps {
  filter: FilterItem;
  onChange: FiltersChangeFunc;
}
