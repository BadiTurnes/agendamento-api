const express = require('express');
const cors = require('cors');
const agendamentoRoutes = require('./routes/agendamentoRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', agendamentoRoutes);

// Swagger setup
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Agendamento',
            version: '1.0.0',
            description: 'API para gerenciamento de agendamentos',
        },
        servers: [
            {
                url: 'http://localhost:{port}/api',
                description: 'Servidor local',
                variables: {
                    port: {
                        default: '3000'
                    }
                }
            }
        ]
    },
    apis: ['./src/routes/agendamentoRoutes.js'],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`);
    console.log(`Swagger disponível em http://localhost:${PORT}/swagger`);
});