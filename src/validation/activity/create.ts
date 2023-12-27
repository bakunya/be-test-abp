import * as z from 'zod'

const activityCreateValidation = z.object({
	title: z.string().min(3).max(255),
	email: z.string().email(),
})

export default activityCreateValidation