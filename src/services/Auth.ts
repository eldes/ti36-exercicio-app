import User from '../models/User';

type LoginResponse = {
  token: string;
  user: User;
};

type LoginRequest = {
  username: string;
  password: string;
};

const AuthService = {
  login: function (request: LoginRequest) {
    return new Promise<LoginResponse>(function (resolve) {
      //TODO: Conecta no back-end e cria uma autenticação
      setTimeout(function () {
        resolve({
          token: '12345',
          user: {
            name: 'Eldes',
            email: 'eldes.poliveira@sp.senac.br',
          },
        });
      }, 2000);
    });
  },
};

export default AuthService;
export type {
  LoginResponse,
  LoginRequest,
};