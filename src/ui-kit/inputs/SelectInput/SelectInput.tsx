import { KeyboardArrowDown } from '@mui/icons-material';
import { FormHelperText, Select, SelectProps, Typography } from '@mui/material';
import { FC } from 'react';
import { Controller, FieldPath, FieldValues } from 'react-hook-form';

type SelectInputProps<TFieldValues extends FieldValues> = {
  placeholder?: string;
  name: FieldPath<TFieldValues>;
} & Partial<SelectProps>;

export const SelectInput: FC<SelectInputProps<FieldValues>> = ({
  placeholder,
  name,
  defaultValue,
  children,
  ...props
}) => (
  <Controller
    name={name}
    defaultValue={defaultValue}
    render={({ field: { value, onBlur, onChange }, fieldState: { error } }) => (
      <>
        <Typography variant="h6" sx={{ fontSize: 10 }} mb={1}>
          {placeholder}
        </Typography>
        <Select
          displayEmpty
          size="small"
          name={name}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          onBlur={onBlur}
          IconComponent={KeyboardArrowDown}
          {...props}
        >
          {children}
        </Select>
        <FormHelperText>{error ? error.message : ''}</FormHelperText>
      </>
    )}
  />
);
