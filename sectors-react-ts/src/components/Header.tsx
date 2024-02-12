import { Link } from "react-router-dom";

interface HeaderProps {
	buttons?: JSX.Element;
}

export function Header(props: HeaderProps) {
	return (
		<div className="flex w-full flex-row items-center justify-between bg-blue-100 p-4">
			<Link to="/" className="text-5xl text-black">
				Sectors
			</Link>
			{props?.buttons && (
				<div className="space-x-5 space-y-2">{props.buttons}</div>
			)}
		</div>
	);
}
