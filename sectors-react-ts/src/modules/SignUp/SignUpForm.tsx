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

  /* TODO: */
  const onSubmit = (values: SingUpFormValues) => {
    singUpMutation.mutate({
      username: values.username,
      password: values.password,
    });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-10 items-center">
          <h3 className="text-xl font-bold">Sign up</h3>
          <div className="flex flex-col w-1/2 mx-5 p-14 space-y-12 border border-gray-300 rounded-2xl">
            <RHFTextField name="username" label="Username" type="text" />
            <RHFTextField name="password" label="Password" type="password" />
            <RHFTextField
              name="confirmPassword"
              label="Confirm password"
              type="password"
            />
            <Button
              type="submit"
              className="bg-green-400 hover:bg-green-500  w-1/2 self-center"
            >
              Sign up
            </Button>
            {singUpMutation.isError && (
              <p>An error occurred: {singUpMutation.error.message}</p>
            )}
          </div>
        </div>
      </form>
      <DevTool control={form.control} />
    </FormProvider>
  );
}

