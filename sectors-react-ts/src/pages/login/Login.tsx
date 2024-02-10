import { Header } from "../../components/Header";
import { PublicButtonGroup } from "../../components/PublicButtonGroup";
import { LoginForm } from "../../modules/Login/LoginForm";

export default function Login() {
  return (
    <>
      <Header buttons={<PublicButtonGroup />} />
      <main className="mt-10">
        <LoginForm />
      </main>
    </>
  );
}
