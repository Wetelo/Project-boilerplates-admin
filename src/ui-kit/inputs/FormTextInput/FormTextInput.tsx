import { Typography } from '@mui/material';
import { ReactNode } from 'react';
import { Controller, ControllerProps, FieldPath, FieldValues } from 'react-hook-form';

import { TextInput } from '..';
import { TextInputProps } from '../TextInput';

export function FormTextInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  defaultValue,
  autoFocus,
  type,
  disabled,
  readOnly,
  multiline,
  minRows,
  maxRows,
  inputComponent,
  placeholder,
}: Pick<ControllerProps<TFieldValues, TName>, 'name' | 'defaultValue'> &
  TextInputProps & { hideEmptyHelperText?: boolean }) {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      render={({ field, fieldState, formState }) => (
        <>
          {placeholder && (
            <Typography variant="h6" sx={{ fontSize: 10 }} mb={1}>
              {placeholder}
            </Typography>
          )}
          <TextInput
            {...field}
            autoFocus={autoFocus}
            type={type}
            error={fieldState.error?.message}
            disabled={disabled}
            readOnly={readOnly}
            multiline={multiline}
            minRows={minRows}
            maxRows={maxRows}
            inputComponent={inputComponent}
            helperText={(formState.errors[name]?.message ?? ' ') as ReactNode}
          />
        </>
      )}
    />
  );
}
