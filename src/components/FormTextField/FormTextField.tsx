import { TextField, type BaseTextFieldProps } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";
import type { FC } from "react";

interface FormTextFieldProps extends BaseTextFieldProps {
  name: string;
}

const FormTextField: FC<FormTextFieldProps> = ({ name, ...rest }) => {
  const { control } = useFormContext();

  const { field, fieldState } = useController({ name, control });

  return (
    <TextField
      inputRef={field.ref}
      {...rest}
      {...field}
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
    />
  );
};

export default FormTextField;
