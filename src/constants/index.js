export const isProduction = process.env.DEPLOY_ENV === 'master';

// noinspection JSUnresolvedVariable
export const DM_ROOT_ADDRESS = isProduction
  ? '//10.11.132.228:8888'
  : '//10.11.132.228:8888';
