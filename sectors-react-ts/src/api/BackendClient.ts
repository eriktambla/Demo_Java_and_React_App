import axios from "axios";
import { API_LOGIN, API_USER_SIGN_UP, getUserSectorsUrl } from "./endpoints";
import { SignUpDto } from "./dto/SignUpDto";
import { LoginDto } from "./dto/LoginDto";
import { UserId } from "./response/UserId";
import { UserWithSectorsDto } from "./response/UserWithSectorsDto";

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
      }
    );

    return data;
  },
  getUserSectors: async (userId: string): Promise<UserWithSectorsDto> => {
    const { data } = await axios.get(getUserSectorsUrl(userId));

    return data;
  },
};

