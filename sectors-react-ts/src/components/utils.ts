import { tv } from "tailwind-variants";

export const focusRing = tv({
	base: "outline outline-blue-600 dark:outline-blue-500 outline-offset-2",
	variants: {
		isFocusVisible: {
			false: "outline-0",
			true: "outline-2",
		},
	},
});

export const fieldBorderStyles = tv({
	variants: {
		isFocusWithin: {
			false: "border-gray-300 dark:border-zinc-500",
			true: "border-gray-600 dark:border-zinc-300",
		},
		isInvalid: {
			true: "border-red-600 dark:border-red-600",
		},
		isDisabled: {
			true: "border-gray-200 dark:border-zinc-700",
		},
	},
});
