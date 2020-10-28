import { Documentation } from '../interfaces/documentation';

export const data: Documentation[] = [
  {
    sectionName: 'Login',
    sectionRoutes: [
      {
        route: '/session',
        description: 'Realizar login na plataforma e resgatar token JWT',
        method: 'POST',
        params: [],
        responses: [],
      },
      {
        route: '/session',
        description: 'Fazer logout do sistema de forma segura',
        method: 'DELETE',
        params: [],
        responses: [],
      },
    ],
  },
  {
    sectionName: 'Usuário',
    sectionRoutes: [
      {
        route: '/users',
        description: '',
        method: 'GET',
        params: [],
        responses: [],
      },
    ],
  },
  {
    sectionName: 'Register',
    sectionRoutes: [
      {
        route: '/users/register',
        method: 'PUT',
        description: '',
        params: [],
        responses: [],
      },
    ],
  },
  {
    sectionName: 'Empresa',
    sectionRoutes: [
      {
        route: '/company',
        method: 'GET',
        description: 'Retorna listagem de empresas',
        params: [],
        responses: [],
      },
      {
        route: '/company/edit',
        method: 'POST',
        description: 'Atualiza detalhes de empresa',
        params: [],
        responses: [],
      },
    ],
  },
];
