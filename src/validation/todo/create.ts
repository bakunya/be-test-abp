import * as z from 'zod'

const todoCreateValidation = z.object({
	title: z.string().min(3).max(255),
	activity_group_id: z.number().min(1),
})

export default todoCreateValidation