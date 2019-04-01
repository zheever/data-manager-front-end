import jsonpPromise from 'jsonp-promise';
import qs from './query-string-util';

/**
 * jsonp-promise 增强
 * @param url
 * @param params
 */
const jsonp = (url, params = {}) => {
  return jsonpPromise(
    url + '?' + qs.stringify(params, { arrayFormat: 'brackets' }),
    {
      prefix: '__dm'
      // 保证在 mock 开启时不超时
    }
  ).promise;
};

export default jsonp;
