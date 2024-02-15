import { SectorDto } from "./SectorDto";

export interface UserWithSectorsDto {
	id: string;
	name?: string;
	agreedToTerms?: boolean;
	sectors?: SectorDto[];
}
