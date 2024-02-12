import { Link } from "react-router-dom";

export function PrivateButtonGroup() {
	return (
		<Link
			to="/"
			className="rounded-lg border bg-white px-2 py-3 text-black hover:border-blue-500 hover:text-black"
		>
			Logout
		</Link>
	);
}
