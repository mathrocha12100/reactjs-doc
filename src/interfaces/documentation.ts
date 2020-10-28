import { Method } from '../components/HTTPMethodBadge';

export interface Param {
  name: string;
  description: string;
  json: string;
}

export interface Response {
  code: string;
  description: string;
  json: string;
}

export interface Route {
  route: string;
  method: Method;
  description: string;
  params: Param[];
  responses: Response[];
}

export interface Documentation {
  sectionName: string;
  sectionRoutes: Route[];
}
