export const RoutesUrl = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  TCC_LIST: '/tcc-list',
  TCC_DETAILS: '/profile/tcc/',
  NEW_TCC: '/profile/tcc/new',
  MEETINGS: '/meetings',
} as const ;

export type RouteUrl = typeof RoutesUrl[keyof typeof RoutesUrl];

export interface Router {
  path: RouteUrl,
  element: React.ReactNode,
}