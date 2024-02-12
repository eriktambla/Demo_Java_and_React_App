import { FormProvider, useForm } from "react-hook-form";
import { useInitialValues } from "./useInitialValues.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSchema } from "./useSchema.ts";
import { RHFTextField } from "../../components/RHF/RHFTextfield.tsx";
import { DevTool } from "@hookform/devtools";
import { Button } from "react-aria-components";
import BackendClient from "../../api/BackendClient.ts";
import { useMutation } from "@tanstack/react-query";
import { SignUpDto } from "../../api/dto/SignUpDto.ts";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card.tsx";

interface SingUpFormValues {
	username: string;
	password: string;
	confirmPassword: string;
}

export function SignUpForm() {
	const initialValues = useInitialValues();
	const validationSchema = useSchema();
	const navigate = useNavigate();

	const form = useForm<SingUpFormValues>({
		defaultValues: initialValues,
		resolver: zodResolver(validationSchema),
	});

	const singUpMutation = useMutation({
		mutationFn: (body: SignUpDto) => BackendClient.signUp(body),
		onSuccess: () => {
			navigate("/login");
		},
	});

	const onSubmit = (values: SingUpFormValues) => {
		singUpMutation.mutate({
			username: values.username,
			password: values.password,
		});
	};

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full sm:w-1/2">
				<Card>
					<RHFTextField name="username" label="Username" type="text" />
					<RHFTextField name="password" label="Password" type="password" />
					<RHFTextField
						name="confirmPassword"
						label="Confirm password"
						type="password"
					/>
					<Button
						type="submit"
						className="self-center bg-green-400 hover:bg-green-500"
					>
						Sign up
					</Button>
					{singUpMutation.isError && (
						<p>An error occurred: {singUpMutation.error.message}</p>
					)}
				</Card>
			</form>
			<DevTool control={form.control} />
		</FormProvider>
	);
}
