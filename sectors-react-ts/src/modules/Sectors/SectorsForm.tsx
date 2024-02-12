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
import { RHFSelect } from "../../components/RHF/RHFSelect";
import { useQuery } from "@tanstack/react-query";
import BackendClient from "../../api/BackendClient";

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

	const sectorQuery = useQuery({
		queryKey: ["getAllSectors"],
		queryFn: () => BackendClient.getAllSectors(),
	});

	const form = useForm({
		defaultValues: initialValues,
		resolver: zodResolver(validationSchema),
	});

	const onSubmit = (values: any) => {
		console.log(values);
	};

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full sm:w-1/2">
				<Card>
					<p className="text-left">
						Please enter your name and pick the Sectors you are currently
						involved in.
					</p>
					<RHFTextField name="name" label="Name" type="text" />
					<RHFSelect
						name="sectors"
						label="Sectors"
						options={sectorQuery.data}
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
