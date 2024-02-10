import { useParams } from "react-router-dom";
import BackendClient from "../../api/BackendClient";
import { useQuery } from "@tanstack/react-query";
import SectorsForm from "../../modules/Sectors/SectorsForm";

export default function Sectors() {
  const { userId } = useParams();

  const userSectorsQuery = useQuery({
    queryKey: ["getUserSectors", userId],
    queryFn: () => BackendClient.getUserSectors(userId!),
    enabled: !!userId,
  });

  if (userSectorsQuery.isLoading) {
    return <div>Loading...</div>;
  }
  if (userSectorsQuery.isError) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h3>Sectors</h3>
      <SectorsForm userSectors={userSectorsQuery.data!} />
    </div>
  );
}

