import { FormProvider, useForm } from "react-hook-form";
import { RHFTextField } from "../../components/RHF/RHFTextfield";
import { Button } from "react-aria-components";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useInitialValues } from "./useInitialValues";
import { useSchema } from "./useSchema";
import { useMutation } from "@tanstack/react-query";
import BackendClient from "../../api/BackendClient";
import { LoginDto } from "../../api/dto/LoginDto";
import { useNavigate } from "react-router-dom";

interface LoginFormValues {
  username: string;
  password: string;
}

export function LoginForm() {
  const initialValues = useInitialValues();
  const validationSchema = useSchema();
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    defaultValues: initialValues,
    resolver: zodResolver(validationSchema),
  });

  const loginMutation = useMutation({
    mutationFn: (body: LoginDto) => BackendClient.login(body),
    onSuccess: (userId) => {
      navigate(`/user/${userId}/sectors`);
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    loginMutation.mutate(values);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-10 items-center">
          <h3 className="text-xl font-bold">Login</h3>
          <div className="flex flex-col w-1/2 mx-5 p-14 space-y-12 border border-gray-300 rounded-2xl">
            <RHFTextField name="username" label="Username" isRequired />
            <RHFTextField
              name="password"
              label="Password"
              type="password"
              isRequired
            />
            <Button
              type="submit"
              className="bg-green-400 hover:bg-green-500  w-1/2 self-center"
            >
              Login
            </Button>
          </div>
        </div>
      </form>
      <DevTool control={form.control} />
    </FormProvider>
  );
}

