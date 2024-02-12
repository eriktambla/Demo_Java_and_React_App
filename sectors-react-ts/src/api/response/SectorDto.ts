export interface SectorDto {
	value: string;
	name: string;
	children?: SectorDto[];
}
