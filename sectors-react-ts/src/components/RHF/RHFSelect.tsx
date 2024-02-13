import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";
import { Label } from "react-aria-components";

interface ReactSelectOptions {
	value: string;
	label: string;
}

interface RHFMultiSelect {
	name: string;
	label?: string;
	type?: string;
	options: ReactSelectOptions[];
	isRequired?: boolean;
}

export function RHFMultiSelect({ name, label, options }: RHFMultiSelect) {
	const { control } = useFormContext();

	return (
		<Controller
			name={name}
			control={control}
			render={({ field, fieldState: { error } }) => (
				<div className="flex flex-col text-left">
					{label && <Label className="font-bold">{label}</Label>}
					<Select {...field} isMulti options={options} />
					{error && <p className="text-red-500">{error.message}</p>}
				</div>
			)}
		/>
	);
}
