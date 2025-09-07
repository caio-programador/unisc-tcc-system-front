export const AppQueryKeys = {
  PERSONAL_INFO: 'personal-info',
  USERS: 'users',
  ONE_USER: 'one-user',
  TCCS: 'tccs',
  TCC_RELATIONSHIP: 'tccRelationship',
  DELIVERIES: 'deliveries',
} as const;

export const AppMutationKeys = {
  LOGIN: 'login',
  REGISTER: 'register',
  UPDATE_PROFILE: 'update-profile',
  DELETE_USER: 'delete-user',
  DELETE_TCC: 'delete-tcc',
  UPDATE_CREATE_TCC: 'update-create-tcc',
  CREATE_DELIVERY: 'create-delivery',
  UPDATE_DELIVERY: 'update-delivery',
  DOWNLOAD_FILE: 'download-file',
} as const;