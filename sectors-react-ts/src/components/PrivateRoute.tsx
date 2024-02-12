import { Header } from "./Header.tsx";
import { Outlet } from "react-router-dom";
import { PrivateButtonGroup } from "./PrivateButtonGroup.tsx";

export function PrivateRoute() {
	return (
		<>
			<Header buttons={<PrivateButtonGroup />} />
			<main className="mt-10">
				<Outlet />
			</main>
		</>
	);
}
