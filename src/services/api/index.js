import jsonp from '@src/utils/jsonp-util';
import { DM_ROOT_ADDRESS } from '@src/constants';
import serviceFactory from './api';
import { request as postRequest } from './utils';

const services = serviceFactory(
  { jsonp },
  postRequest,
  Promise.reject.bind(Promise),
  DM_ROOT_ADDRESS
);

export default services;
