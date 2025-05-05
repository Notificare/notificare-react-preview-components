import { PROD_PUSH_API_HOST } from '../constants/constants';

let pushAPIHost = PROD_PUSH_API_HOST; // default API host

export const getPushAPIHost = () => pushAPIHost;
export const setPushAPIHost = (host: string) => {
  pushAPIHost = host;
};
