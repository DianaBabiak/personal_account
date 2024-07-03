import {z} from 'zod'

export const PersonalInfoSchema = z.object({
    name: z.string().optional(),
    surname: z.string().optional(),
    patronymic: z.string().optional(),
    birthday: z.string().optional(),
    employmentDate: z.string().optional(),
    country: z.string().optional(),
    city: z.string().optional(),
    position: z.string().optional(),
    email: z.string().email().optional(),
})

export type FormValues = z.infer<typeof PersonalInfoSchema>
