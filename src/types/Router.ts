export const RoutesUrl = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  TCC_LIST: '/tcc-list',
  TCC_DETAILS: '/tcc-details',
  NEW_TCC: '/profile/tcc/new',
  MEETINGS: '/meetings',
  USER_DETAILS: '/user-details',
  ERROR: '/error',
} as const ;

export type RouteUrl = typeof RoutesUrl[keyof typeof RoutesUrl];

export interface Router {
  path: RouteUrl,
  element: React.ReactNode,
}