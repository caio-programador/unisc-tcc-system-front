export const RoutesUrl = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  TCC_LIST: '/tcc-list',
  TCC_DETAILS: '/tcc-details',
  NEW_TCC: '/profile/tcc/new',
  MEETINGS: '/meetings',
<<<<<<< HEAD
  USER_DETAILS: '/user-details',
=======
  ERROR: '/error',
>>>>>>> c49d1b6ed85390c53cb7a6c66a2c12880f2130ef
} as const ;

export type RouteUrl = typeof RoutesUrl[keyof typeof RoutesUrl];

export interface Router {
  path: RouteUrl,
  element: React.ReactNode,
}