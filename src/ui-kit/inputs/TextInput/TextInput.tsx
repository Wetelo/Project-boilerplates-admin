import { Email } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { InputBaseComponentProps } from '@mui/material/InputBase/InputBase';
import TextField from '@mui/material/TextField';
import React, { ChangeEvent, forwardRef, ReactNode, useState } from 'react';

export type TextInputProps = {
  type?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  error?: string;
  autoComplete?: string;
  inputComponent?: React.ElementType<InputBaseComponentProps>;
  multiline?: boolean;
  minRows?: number;
  maxRows?: number;
  placeholder?: string;
  helperText?: ReactNode;
  label?: string;
};

export const TextInput = forwardRef<
  HTMLDivElement | null,
  TextInputProps & {
    name: string;
    value: string;
    onChange: (value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur: () => void;
  }
>((props, ref) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleClickShowPassword = () => setIsShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const inputEndAdornment: { [key: string]: JSX.Element } = {
    email: <Email />,
    password: (
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        {isShowPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </IconButton>
    ),
  };

  return (
    <TextField
      variant="outlined"
      size="small"
      ref={ref}
      name={props.name}
      value={props.value}
      label={props.label}
      onChange={props.onChange}
      onBlur={props.onBlur}
      autoFocus={props.autoFocus}
      type={props.type === 'password' && isShowPassword ? 'text' : props.type}
      fullWidth
      error={!!props.error}
      helperText={props.helperText}
      disabled={props.disabled}
      autoComplete={props.autoComplete}
      multiline={props.multiline}
      minRows={props.minRows}
      maxRows={props.maxRows}
      placeholder={props.placeholder}
      InputProps={{
        readOnly: props.readOnly,
        inputComponent: props.inputComponent,
        endAdornment: props.type && <InputAdornment position="end">{inputEndAdornment[props?.type]}</InputAdornment>,
      }}
    />
  );
});
