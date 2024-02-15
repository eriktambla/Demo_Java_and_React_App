import { z } from "zod";

export const useSchema = () => {
	return z.object({
		name: z.string().min(1, "Name is required"),
		agreedToTerms: z.boolean(),
		sectors: z
			.array(
				z.object({
					value: z.number(),
					label: z.string(),
				}),
			)
			.nonempty({ message: "At least one sector is required" }),
	});
};
