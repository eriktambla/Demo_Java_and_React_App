import { FormProvider, useForm } from "react-hook-form";
import { UserWithSectorsDto } from "../../api/response/UserWithSectorsDto";
import { useInitialValues } from "./useInitialValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";
import { useSchema } from "./useSchema";
import { RHFTextField } from "../../components/RHF/RHFTextfield";
import { Button } from "react-aria-components";
import { RHFCheckbox } from "../../components/RHF/RHFCheckbox";
import Card from "../../components/Card";
import { RHFMultiSelect } from "../../components/RHF/RHFSelect";
import { useQuery } from "@tanstack/react-query";
import BackendClient from "../../api/BackendClient";
import { SectorDto } from "../../api/response/SectorDto";

export interface SectorFormValues {
	name: string;
	sectors: {
		value: string;
		label: string;
	}[];
	agreeToTerms: boolean;
}

export default function SectorsForm({
	userSectors,
	initialSectors,
}: {
	userSectors: UserWithSectorsDto;
	initialSectors?: {
		value: string;
		label: string;
	}[];
}) {
	const initialValues = useInitialValues(userSectors, initialSectors);
	const validationSchema = useSchema();

	const allSectorsQuery = useQuery({
		queryKey: ["getAllSectors"],
		queryFn: () => BackendClient.getAllSectors(),
	});

	const form = useForm({
		defaultValues: initialValues,
		resolver: zodResolver(validationSchema),
	});

	const onSubmit = (values: SectorFormValues) => {
		console.log(values);
	};

	if (allSectorsQuery.isLoading) {
		return <p>Error</p>;
	}

	if (allSectorsQuery.isError) {
		return <p>Error</p>;
	}

	const sectorsOptions = allSectorsQuery.data?.map((sector: SectorDto) => ({
		value: sector.value,
		label: sector.name,
	}));

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full sm:w-1/2">
				<Card>
					<p className="text-left">
						Please enter your name and pick the Sectors you are currently
						involved in.
					</p>
					<RHFTextField name="name" label="Name" type="text" />
					<RHFMultiSelect
						name="sectors"
						label="Sectors"
						options={sectorsOptions!}
					/>
					<RHFCheckbox name="agreeToTerms" label="Agree to terms" />
					<Button
						type="submit"
						className="self-center  bg-green-400 hover:bg-green-500"
					>
						Save
					</Button>
				</Card>
			</form>
			<DevTool control={form.control} />
		</FormProvider>
	);
}
