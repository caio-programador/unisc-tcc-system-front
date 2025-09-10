export const AppQueryKeys = {
  PERSONAL_INFO: 'personal-info',
  USERS: 'users',
  ONE_USER: 'one-user',
  TCCS: 'tccs',
  TCC_RELATIONSHIP: 'tccRelationship',
  DELIVERIES: 'deliveries',
  EVALUATION: 'evaluation',
  MEETINGS: 'meetings',
  NOTIFICATIONS: 'notifications',
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
  CREATE_EVALUATION: 'create-evaluation',
  UPDATE_EVALUATION: 'update-evaluation',
  CREATE_MEETING: 'create-meeting',
} as const;