import { UserWithSectorsDto } from "../../api/response/UserWithSectorsDto";

export const useInitialValues = (
	userSectors: UserWithSectorsDto,
	initialSectors?: { value: string; label: string }[],
) => {
	return {
		name: userSectors?.name ?? "",
		agreeToTerms: userSectors?.agreeToTerms ?? false,
		sectors: initialSectors ?? [],
	};
};
