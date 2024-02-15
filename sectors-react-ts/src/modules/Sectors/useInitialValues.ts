import { UserWithSectorsDto } from "../../api/response/UserWithSectorsDto";

export const useInitialValues = (
	userSectors: UserWithSectorsDto,
	initialSectors?: { value: string; label: string }[],
) => {
	return {
		name: userSectors?.name ?? "",
		agreedToTerms: userSectors?.agreedToTerms ?? false,
		sectors: initialSectors ?? [],
	};
};
