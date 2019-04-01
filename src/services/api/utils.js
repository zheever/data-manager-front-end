import axios from 'axios';

/**
 * 是否合法返回值
 * @param data
 * @return {*}
 */
function isValidShape(data) {
  return data.Ret !== undefined && data.Error !== undefined;
}

/**
 * 返回值二次加工处理
 * @param promise
 */
function responseHandler(promise) {
  return promise.then((response = {}) => {
    const { data } = response;
    // if (!isValidShape(data)) {
    //   throw new window.Error('请求返回值不合法');
    // }
    const { Ret, message, code, ...rest } = data;
    if (Ret === 'ok') {
      return rest;
    } else if (Error) {
      return Promise.reject({
        message,
        code /* 暂时使用 code 占位, 后续后端会给明确的 code */
      });
    } else {
      throw new window.Error(`返回值 Ret 不合法, Ret = ${Ret}`);
    }
  });
}

/**
 * 请求实现
 * @param url
 * @param data
 */
export function request(url, data) {
  return responseHandler(axios.post(url, data));
}
