export const PUSH_API_PROD_HOST = 'https://push.notifica.re';
export const PUSH_API_TEST_HOST = 'https://push-test.notifica.re';

let pushAPIHost = PUSH_API_PROD_HOST;

export const getPushAPIHost = () => pushAPIHost;
export const setPushAPIHost = (host: string) => {
  pushAPIHost = host;
};
