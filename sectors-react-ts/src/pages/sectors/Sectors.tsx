import { useParams } from "react-router-dom";
import BackendClient from "../../api/BackendClient";
import { useQuery } from "@tanstack/react-query";
import SectorsForm from "../../modules/Sectors/SectorsForm";
import { SectorDto } from "../../api/response/SectorDto";

export default function Sectors() {
	const { userId } = useParams();

	const { isLoading, isError, data } = useQuery({
		queryKey: ["getUserSectors", userId],
		queryFn: () => BackendClient.getUserSectors(userId!),
		enabled: !!userId,
	});

	const initialSectors = data?.sectors?.map((sector: SectorDto) => ({
		value: sector?.value,
		label: sector?.name,
	}));

	return (
		<div className="flex flex-col items-center">
			<h3 className="mb-5 text-xl font-bold">Sectors</h3>
			{isLoading && <p>Loading...</p>}
			{isError && <p>Error</p>}
			{!isError && !isLoading && (
				<SectorsForm userSectors={data!} initialSectors={initialSectors} />
			)}
		</div>
	);
}
