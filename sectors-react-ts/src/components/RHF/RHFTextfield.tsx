import { Controller, useFormContext } from "react-hook-form";
import { FieldError, Input, Label, TextField } from "react-aria-components";
import { tv } from "tailwind-variants";
import { fieldBorderStyles, focusRing } from "../utils.ts";

interface RHFTextField {
  name: string;
  label?: string;
  type?: string;
  isRequired?: boolean;
}

export function RHFTextField({ name, label, isRequired, type }: RHFTextField) {
  const { control } = useFormContext();

  const inputStyle = tv({
    extend: focusRing,
    base: "border-2 rounded-md p-1",
    variants: {
      isFocused: fieldBorderStyles.variants.isFocusWithin,
      ...fieldBorderStyles.variants,
    },
  });

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { name, value, onChange, onBlur, ref },
        fieldState: { invalid, error },
      }) => (
        <TextField
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          isInvalid={invalid}
          isRequired={isRequired}
          type={type}
          className="flex flex-col text-left h-16"
        >
          {label && <Label className="font-bold">{label}</Label>}
          <Input ref={ref} className={inputStyle} />
          <FieldError className="text-red-500">{error?.message}</FieldError>
        </TextField>
      )}
    />
  );
}

