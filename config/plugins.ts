export default ({env}) => ({
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: env('SMTP_HOST', 'smtp.example.com'),
                port: env('SMTP_PORT', 587),
                auth: {
                    user: env('SMTP_USERNAME'),              // Имя пользователя SMTP
                    pass: env('SMTP_PASSWORD'),              // Пароль SMTP
                },
            },
            settings: {
                defaultFrom: 'otto.voice@gmail.com',       // От кого по умолчанию
                defaultReplyTo: 'otto.voice@gmail.com',    // Кому отвечать по умолчанию
            },
        },
    },
});
