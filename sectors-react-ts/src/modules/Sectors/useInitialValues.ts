import { UserWithSectorsDto } from "../../api/response/UserWithSectorsDto";

export const useInitialValues = (userSectors: UserWithSectorsDto) => {
  return {
    name: userSectors?.name ?? "",
    agreeToTerms: userSectors?.agreeToTerms ?? false,
    sectors: userSectors?.sectors ?? [],
  };
};

