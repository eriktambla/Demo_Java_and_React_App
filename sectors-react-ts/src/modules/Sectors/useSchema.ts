import { z } from "zod";

export const useSchema = () => {
  return z.object({
    name: z.string().min(1, "Name is required"),
    agreeToTerms: z.boolean(),
    sectors: z
      .object({
        id: z.string(),
        name: z.string(),
      })
      .array(),
  });
};

