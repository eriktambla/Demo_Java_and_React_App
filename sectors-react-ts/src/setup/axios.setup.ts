import axios from "axios";

const logout = () => {
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
