import { LoginForm } from "../../modules/Login/LoginForm";

export default function Login() {
	return (
		<div className="flex flex-col items-center">
			<h3 className="mb-5 text-xl font-bold">Login</h3>
			<LoginForm />
		</div>
	);
}
