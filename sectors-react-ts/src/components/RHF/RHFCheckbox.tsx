import { Controller, useFormContext } from "react-hook-form";
import { Check } from "lucide-react";
import { Checkbox } from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "../utils";

interface RHFCheckbox {
	name: string;
	label: string;
}

const boxStyles = tv({
	extend: focusRing,
	base: "w-5 h-5 flex-shrink-0 rounded flex items-center justify-center border-2",
	variants: {
		isSelected: {
			false: "bg-white",
			true: "bg-black",
		},
	},
});

const iconStyles =
	"w-4 h-4 text-white group-disabled:text-gray-400 dark:text-slate-900 dark:group-disabled:text-slate-600";

export function RHFCheckbox({ name, label }: RHFCheckbox) {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field: props }) => (
				<Checkbox
					{...props}
					isSelected={props.value}
					className="flex flex-row items-center gap-2"
				>
					{({ isSelected, isFocusVisible }) => (
						<>
							<div
								className={boxStyles({
									isSelected,
									isFocusVisible,
								})}
							>
								{props.value && <Check aria-hidden className={iconStyles} />}
							</div>
							{label}
						</>
					)}
				</Checkbox>
			)}
		/>
	);
}
