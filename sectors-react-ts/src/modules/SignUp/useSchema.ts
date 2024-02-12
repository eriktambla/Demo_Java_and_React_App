import { z } from "zod";

export const useSchema = () => {
	return z
		.object({
			username: z.string().min(1, "Username is required"),
			password: z.string().min(1, "Password is required"),
			confirmPassword: z.string().min(1, "Confirm password is required"),
		})
		.refine((data) => data.password === data.confirmPassword, {
			message: "Passwords don't match",
			path: ["confirmPassword"],
		});
};
