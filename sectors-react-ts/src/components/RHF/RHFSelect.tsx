import { Controller, useFormContext } from "react-hook-form";
import ReactSelect from "react-select";
import { SectorDto } from "../../api/response/SectorDto";
import { Label } from "react-aria-components";

interface RHFSelect {
	name: string;
	label?: string;
	type?: string;
	options: any;
	isRequired?: boolean;
}

export function RHFSelect({ name, label, options }: RHFSelect) {
	const { control } = useFormContext();

	const sectorsOptions = options?.map((sector: SectorDto) => ({
		value: sector?.value,
		label: sector?.name,
	}));

	console.log(options);

	return (
		<Controller
			name={name}
			control={control}
			render={({ field: props, fieldState: { error } }) => (
				<div className="flex flex-col text-left">
					{label && <Label className="font-bold">{label}</Label>}
					<ReactSelect {...props} isMulti options={sectorsOptions} />
					{error && <p className="text-red-500">{error.message}</p>}
				</div>
			)}
		/>
	);
}
