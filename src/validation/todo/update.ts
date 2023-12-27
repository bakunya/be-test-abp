import * as z from 'zod'

const todoUpdateValidation = z.object({
	is_active: z.boolean().nullish(),
	title: z.string().min(3).max(255).nullish(),
	priority: z.string().min(3).max(255).nullish(),
})

export default todoUpdateValidation