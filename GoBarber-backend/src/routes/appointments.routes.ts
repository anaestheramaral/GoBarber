/* eslint-disable camelcase */
// Rota: responsável APENAS por receber uma requisição, chamar outro arquivo e então devolver uma resposta. Não deve conter condições ou nehuma regra de negócio

import { Router } from 'express';
import { parseISO } from 'date-fns'; // converts the date into the ISO model
import { getCustomRepository } from 'typeorm';
import AppointmentsRepository from '../repositories/AppointmentsRepository'; // Repository
import CreateAppointmentService from '../services/CreateAppointmentService'; // Service
import ensureAthenticated from '../middlewares/ensureAuthenticated';

const appointmentsRouter = Router(); // just as the app()?

appointmentsRouter.use(ensureAthenticated);
// get all appointments
appointmentsRouter.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  const appointments = await appointmentsRepository.find();

  return response.json(appointments);
});

appointmentsRouter.post('/', async (request, response) => {
  const { provider_id, date } = request.body; // { provider, date } = appointment

  const parsedDate = parseISO(date);

  const createAppointment = new CreateAppointmentService();
  // for u to create the appointment you are getting the function from service

  const appointment = await createAppointment.execute({
    provider_id,
    date: parsedDate,
  });

  return response.json({ appointment });
});

export default appointmentsRouter;
