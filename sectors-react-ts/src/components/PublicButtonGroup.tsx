import { Link } from "react-router-dom";

export function PublicButtonGroup() {
	return (
		<>
			<Link
				to="/signup"
				className="rounded-lg border bg-white px-2 py-3 text-black hover:border-blue-500 hover:text-black"
			>
				Sign up
			</Link>
			<Link
				to="/login"
				className="rounded-lg border bg-white px-2 py-3 text-black hover:border-blue-500 hover:text-black"
			>
				Login
			</Link>
		</>
	);
}
