import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {useInitialValues} from "./useInitialValues.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {useSchema} from "./useSchema.ts";
import {RHFTextField} from "../../components/RHFTextfield.tsx";
import {DevTool} from "@hookform/devtools";
import {Button} from "react-aria-components";

export function SignUpForm() {
    const initialValues = useInitialValues();
    const validationSchema = useSchema();

    const form = useForm<any>({
        defaultValues: initialValues,
        resolver: zodResolver(validationSchema),
    });

    const onSubmit: SubmitHandler<any> = (data) => console.log(data)

    return <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-10 items-center">
                <h3 className="text-xl font-bold">Sign up</h3>
                <div className="flex flex-col w-1/2 mx-5 p-14 space-y-12 border border-gray-300 rounded-2xl">
                    <RHFTextField name="userName" label="Username" isRequired/>
                    <RHFTextField name="password" label="Password" isRequired/>
                    <RHFTextField name="confirmPassword" label="Confirm password" isRequired/>
                    <Button type="submit" className="border-gray-300">Submit</Button>
                </div>
            </div>
        </form>
        <DevTool control={form.control}/>
    </FormProvider>
}