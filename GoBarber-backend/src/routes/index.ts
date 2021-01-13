// src/routes/index.ts
import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

// use=> idenpendente do tipo de rora ele irá aplicar o  appointmentsRouter... Quando for definir um get, post, etc. dentro do appointments.routs.ts, não irá precisar de usar o "/appointments" novamente, apenas "/"

export default routes;
