import { z } from 'zod';

export const useSchema = () => {
    return z.object({
        username: z.string().nonempty('Username is required'),
        password: z.string().nonempty('Password is required'),
    })
}