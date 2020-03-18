import { RequestArgs, Middleware } from '@generated/mfkessai';
// tslint:disable-next-line:no-var-requires
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


const preMiddleweares: Middleware['pre'][] = [
  (reqParams: RequestArgs): RequestArgs => ({
      ...reqParams,
      withCredentials: false,
      createXHR: () => new XMLHttpRequest(),
  }),
];
const postMiddleweares: Middleware['post'][] = [];

const middleware: Middleware[] = [
  ...preMiddleweares.map((pre) => ({pre})),
  ...postMiddleweares.map((post) => ({post})),
];

export const apiConfig = {apiKey: process.env.MF_KESSAI_API_KEY, middleware};
