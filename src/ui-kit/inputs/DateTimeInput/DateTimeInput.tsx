import { FormHelperText } from '@mui/material';
import { DateTimePicker, DateTimePickerProps, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

interface IAutocompleteInputProps<TField extends FieldValues> {
  control: Control<TField>;
  name: Path<TField>;
  placeholder?: string;
}

export const DateTimeInput = <TField extends FieldValues>({
  name,
  control,
  placeholder,
  ...props
}: IAutocompleteInputProps<TField> & DateTimePickerProps<Date>) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState: { error } }) => {
      const { onChange, value, ref } = field;
      return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker value={value} onChange={onChange} {...props} ref={ref} />
          <FormHelperText>{error ? error.message : ''}</FormHelperText>
        </LocalizationProvider>
      );
    }}
  />
);
