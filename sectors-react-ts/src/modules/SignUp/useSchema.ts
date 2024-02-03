import { z } from 'zod';

export const useSchema = () => {
    return z.object({
        userName: z.string().nonempty('Username is required'),
        password: z.string().nonempty('Password is required'),
        confirmPassword: z.string(),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });
}