import { Autocomplete, TextField, Typography } from '@mui/material';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

interface IAutocompleteInputOptions {
  label: string;
  value: string;
}

interface IAutocompleteInputProps<TOptions extends IAutocompleteInputOptions, TField extends FieldValues> {
  control: Control<TField>;
  name: Path<TField>;
  options: TOptions[];
  placeholder?: string;
}

export const AutocompleteInput = <TOptions extends IAutocompleteInputOptions, TField extends FieldValues>({
  name,
  options,
  control,
  placeholder,
}: IAutocompleteInputProps<TOptions, TField>) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState: { error } }) => {
      const { onChange, onBlur, value, ref } = field;
      return (
        <Autocomplete
          size="small"
          value={value ? options.find((option) => value === option.value) ?? null : null}
          getOptionLabel={(option) => option.label}
          onChange={(_, newValue) => {
            onChange(newValue ? newValue.value : '');
          }}
          onBlur={onBlur}
          options={options}
          renderInput={(params) => (
            <>
              {placeholder && (
                <Typography variant="h6" sx={{ fontSize: 10 }} mb={1}>
                  {placeholder}
                </Typography>
              )}
              <TextField {...params} inputRef={ref} error={!!error} helperText={error?.message ?? ' '} />
            </>
          )}
        />
      );
    }}
  />
);
