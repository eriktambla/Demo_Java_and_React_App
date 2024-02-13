import axios from "axios";
import { Button } from "react-aria-components";
import { API_LOGOUT } from "../api/endpoints";
import { useNavigate } from "react-router-dom";

export function PrivateButtonGroup() {
	const navigate = useNavigate();
	const handleLogoutPress = async () => {
		await axios.post(API_LOGOUT);
		navigate("/login");
	};

	return (
		<Button
			onPress={handleLogoutPress}
			className="rounded-lg border bg-white px-2 py-3 text-black hover:border-blue-500 hover:text-black"
		>
			Logout
		</Button>
	);
}
