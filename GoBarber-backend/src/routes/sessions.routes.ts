import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionRouter = Router(); // just as the app()?

sessionRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  /* REGRAS DE NEGÓCIO (services):
   * [x] verificar se email existe
   * [x] verificar se senha está correta
   * [] gerar token jwt
   */

  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  // delete user.password;

  return response.json({ user, token });
});

export default sessionRouter;
