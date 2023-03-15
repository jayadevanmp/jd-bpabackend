export const openAPIOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'BPA API Documentation',
        version: '0.0.1',
        description:
          'BPA Backend Application APIs ',
      },
      servers: [
        {
          url: 'http://localhost:3000',
        },
      ],
    },
    apis: ['./src/routes/**/*.ts'],
};
