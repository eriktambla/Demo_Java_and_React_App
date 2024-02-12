import axios from "axios";
import {
	API_ALL_SECTORS,
	API_LOGIN,
	API_USER_SIGN_UP,
	getUserSectorsUrl,
} from "./endpoints";
import { SignUpDto } from "./dto/SignUpDto";
import { LoginDto } from "./dto/LoginDto";
import { UserId } from "./response/UserId";
import { UserWithSectorsDto } from "./response/UserWithSectorsDto";
import { SectorDto } from "./response/SectorDto";

export default {
	signUp: async (body: SignUpDto) => {
		const { data } = await axios.post(API_USER_SIGN_UP, body);

		return data;
	},
	login: async (body: LoginDto): Promise<UserId> => {
		const { data } = await axios.post(
			API_LOGIN,
			{
				username: body.username,
				password: body.password,
			},
			{
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
			},
		);

		return data;
	},
	getUserSectors: async (userId: string): Promise<UserWithSectorsDto> => {
		const { data } = await axios.get(getUserSectorsUrl(userId));

		return data;
	},
	getAllSectors: async (): Promise<SectorDto[]> => {
		const { data } = await axios.get(API_ALL_SECTORS);

		return data;
	},
};
