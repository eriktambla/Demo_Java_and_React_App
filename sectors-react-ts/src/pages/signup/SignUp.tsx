import { SignUpForm } from "../../modules/SignUp/SignUpForm.tsx";

export default function SignUp() {
	return (
		<div className="flex flex-col items-center">
			<h3 className="mb-5 text-xl font-bold">Sign up</h3>
			<SignUpForm />
		</div>
	);
}
