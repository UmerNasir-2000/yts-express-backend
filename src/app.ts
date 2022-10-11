import dotenv from 'dotenv';
dotenv.config({ path: `envs/.${process.env.NODE_ENV}.env` });

import 'reflect-metadata';
import { Application } from 'express';
import { createExpressServer, useContainer } from 'routing-controllers';
import config from 'config';
import { Container } from 'typedi';
import CinematicsController from './modules/cinematics/cinematics.controller';

(async function main() { 

    useContainer(Container);

    const app: Application = createExpressServer({
        cors: true,
        controllers: [CinematicsController]
    });

    const PORT = config.get<number>('port');
    app.listen(PORT, () => console.log(`Server running on https://localhost:${PORT}/`));

})();
