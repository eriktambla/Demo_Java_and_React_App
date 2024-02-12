import { SectorDto } from "./SectorDto";

export interface UserWithSectorsDto {
	id: string;
	name?: string;
	agreeToTerms?: boolean;
	sectors?: SectorDto[];
}
