export const AppQueryKeys = {
  PERSONAL_INFO: 'personal-info',
  USERS: 'users',
  ONE_USER: 'one-user',
  TCCS: 'tccs',
} as const;

export const AppMutationKeys = {
  LOGIN: 'login',
  REGISTER: 'register',
  UPDATE_PROFILE: 'update-profile',
  DELETE_USER: 'delete-user',
  DELETE_TCC: 'delete-tcc',
  UPDATE_CREATE_TCC: 'update-create-tcc',
} as const;