const sendEmail = async (ctx: any) => {
    const {email, name, phone, doctorName} = ctx.request.body.data;

    const htmlContent = `
          <h1>Новая заявка</h1>
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Врач:</strong> ${doctorName ?? 'Врач не указан'}</p>
        `;

    try {
        const result = await strapi.plugins['email'].services.email.send({
            to: process.env.SMTP_USERNAME,
            from: process.env.SMTP_USERNAME,
            replyTo: email,
            subject: 'Новая заявка',
            html: htmlContent,
        });

        if (result) {
            return {
                statusText: 'Успешно'
            }
        }

        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email: ', error);
        throw new Error('Failed to send email');
    }
};

export default {
    sendEmail,
};
