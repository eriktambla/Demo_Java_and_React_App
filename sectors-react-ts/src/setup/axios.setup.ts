import axios from "axios";
import { API_LOGOUT } from "../api/endpoints";

const logout = async () => {
	await axios.get<void>(API_LOGOUT);
	window.location.assign("/login");
};

axios.interceptors.response.use(
	(response) => response,
	(error) => {
		const typedError = error as { response: { status: number } };
		const { status } = typedError.response;

		if (status === 401) {
			void logout();
		}

		return Promise.reject(error);
	},
);

export default {};
