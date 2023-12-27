import * as z from 'zod'

const activityUpdateValidation = z.object({
	title: z.string().min(3).max(255)
})

export default activityUpdateValidation