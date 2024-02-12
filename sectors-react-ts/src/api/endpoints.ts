const API_BASE = "/api/v1/";
const API_USER_BASE = `${API_BASE}user/`;

export const API_USER_SIGN_UP = `${API_USER_BASE}signup`;
export const API_LOGIN = `${API_BASE}login`;
export const API_LOGOUT = `${API_BASE}logout`;
export const API_ALL_SECTORS = `${API_BASE}sector/all`;

export const getUserSectorsUrl = (userId: string) =>
	`${API_USER_BASE}${userId}/sectors`;
