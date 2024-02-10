import { Header } from "../../components/Header.tsx";
import { PublicButtonGroup } from "../../components/PublicButtonGroup.tsx";
import { SignUpForm } from "../../modules/SignUp/SignUpForm.tsx";

export default function SignUp() {
  return (
    <>
      <Header buttons={<PublicButtonGroup />} />
      <main className="mt-10">
        <SignUpForm />
      </main>
    </>
  );
}
