import { FormProvider, useForm } from "react-hook-form";
import { UserWithSectorsDto } from "../../api/response/UserWithSectorsDto";
import { useInitialValues } from "./useInitialValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";
import { useSchema } from "./useSchema";
import { RHFTextField } from "../../components/RHF/RHFTextfield";
import { Button } from "react-aria-components";
import { RHFCheckbox } from "../../components/RHF/RHFCheckbox";

export default function SectorsForm({
  userSectors,
}: {
  userSectors: UserWithSectorsDto;
}) {
  const initialValues = useInitialValues(userSectors);
  const validationSchema = useSchema();

  const form = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (values: unknown) => {
    console.log(values);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col w-1/2 mx-5 p-14 space-y-12 border border-gray-300 rounded-2xl">
          <RHFTextField name="name" label="Name" type="text" />
          <RHFCheckbox name="agreeToTerms" label="Agree to terms" />
          <Button
            type="submit"
            className="bg-green-400 hover:bg-green-500  w-1/2 self-center"
          >
            Save
          </Button>
        </div>
      </form>
      <DevTool control={form.control} />
    </FormProvider>
  );
}

