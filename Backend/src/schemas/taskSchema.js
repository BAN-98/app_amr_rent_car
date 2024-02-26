const z = require('zod');

exports.createTaskSchema = z.object({
    tittle: z.string({required_error: 'Tittle is required'}),
    description: z.string({required_error: 'Description must be a string'}).optional(),
    date:z.string().datetime().optional(),
})