import { z } from "zod";

export const useSchema = () => {
	return z.object({
		name: z.string().min(1, "Name is required"),
		agreeToTerms: z.boolean(),
		sectors: z
			.array(
				z.object({
					id: z.string(),
					label: z.string(),
				}),
			)
			.nonempty({
				message: "At least one sector is required",
			}),
	});
};
