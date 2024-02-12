import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { PublicButtonGroup } from "./PublicButtonGroup";

export function PublicRoute() {
	return (
		<>
			<Header buttons={<PublicButtonGroup />} />
			<main className="mt-10">
				<Outlet />
			</main>
		</>
	);
}
