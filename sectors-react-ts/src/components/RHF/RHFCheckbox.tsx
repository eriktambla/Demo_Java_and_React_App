import { Controller, useFormContext } from "react-hook-form";
import { Checkbox } from "react-aria-components";

interface RHFCheckbox {
  name: string;
  label: string;
  isRequired?: boolean;
}

export function RHFCheckbox({ name, label, isRequired }: RHFCheckbox) {
  const { control } = useFormContext();

  return {
    /* <Controller
      control={control}
      name={name}
      render={({
        field: { name, value, onChange, onBlur },
        fieldState: { invalid },
      }) => (
        
      )}
    /> */
  };
}

