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
			render={({ field: props, fieldState: { error, invalid } }) => (
				<TextField
					{...props}
					isInvalid={invalid}
					isRequired={isRequired}
					type={type}
					className="flex h-16 w-full flex-col text-left"
				>
					{label && <Label className="font-bold">{label}</Label>}
					<Input className={inputStyle} />
					<FieldError className="text-red-500">{error?.message}</FieldError>
				</TextField>
			)}
		/>
	);
}
