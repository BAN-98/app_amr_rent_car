const z = require('zod');

exports.registerSchema = z.object({
    userName: z.string({ required_error: 'userName es obligatorio' }),
    email: z.string({ required_error: 'email es obligatorio' }).email({ message: 'Dirección de correo electrónico no válida' }),
    password: z.string({ required_error: 'password es obligatorio' }).min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
})

exports.loginSchema = z.object({
    email: z.string({ required_error: 'El correo electrónico es obligatorio' }).email({ message: 'Dirección de correo electrónico no válida' }),
    password: z.string({ required_error: 'La contraseña es obligatoria' }).min(6, { message: 'La contraseña debe tener al menos 6 caracteres'}),
})
