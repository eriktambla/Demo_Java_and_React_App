import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function Card({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<div
			className={twMerge(
				"space-y-10 rounded-2xl border-2 border-gray-300 px-12 py-10 shadow",
				className,
			)}
		>
			{children}
		</div>
	);
}
