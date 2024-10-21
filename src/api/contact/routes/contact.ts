export default {
  routes: [
    {
      method: 'POST',
      path: '/contact/send-email',
      handler: 'contact.sendEmail',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
