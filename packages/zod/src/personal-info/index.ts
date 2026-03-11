import { z } from 'zod';

enum GENDER { MALE, FEMALE, OTHERS }

export const personalInfoSchema = z.object({
    name: z.string().nonempty(),
    phone: z.number().nonnegative(),
    age: z.number().nonnegative(),
    gender: z.enum(GENDER)
})
