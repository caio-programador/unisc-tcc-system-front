export const AppQueryKeys = {
  PERSONAL_INFO: 'personal-info',
  USERS: 'users',
  ONE_USER: 'one-user',
} as const;

export const AppMutationKeys = {
  LOGIN: 'login',
  REGISTER: 'register',
  UPDATE_PROFILE: 'update-profile',
  DELETE_USER: 'delete-user'
} as const;