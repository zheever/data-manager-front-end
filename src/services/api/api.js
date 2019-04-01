import qs from '@src/utils/query-string-util';

const searchObj = qs.parse(window.location.search);

export default function(request, postRequest, reject, rootAddress) {
  const service = {};

  service.getTokenAccount = function(token) {
    return request.jsonp(rootAddress + '/jx3/scorecenter190225/get_config', {
      token
    });
  };

  service.postParamsDemo = function(params) {
    return request
      .jsonp(rootAddress + '/jx3/friendship181102/is_self', { ...params })
      .then(response => {
        if (response.code === 1 /* 成功 */) {
          return response.data;
        }
        return reject(response);
      });
  };
  service.noParamsDemo = function() {
    return request
      .jsonp(rootAddress + '/jx3/friendship181102/is_self')
      .then(response => {
        if (response.code === 1 /* 成功 */) {
          return response.data;
        }
        return reject(response);
      });
  };

  service.log = function(message) {
    return request
      .jsonp(rootAddress + '/log', { msg: message })
      .then(response => {
        if (response.code === 1 /* 成功 */) {
          return response.data;
        }
        return reject(response);
      });
  };

  service.uploadTableContent = async function(tableHead) {
    const url = `${rootAddress}/upload-table-head`;
    const requestParams = {
      table_head: tableHead
    };
    const response = await postRequest(url, requestParams);
    return response;
  };

  service.uploadTable = async function(tableHead, tableContent, name) {
    const url = `${rootAddress}/upload-table`;
    const requestParams = {
      table_head: tableHead,
      table_content: tableContent,
      name: name
    };
    const response = await postRequest(url, requestParams);
    return response;
  };

  service.getFileList = async function() {
    return request.jsonp(rootAddress + '/file-list').then(response => {
      if (response.code === 1 /* 成功 */) {
        return response.data;
      }
      return reject(response);
    });
  };

  service.getTableList = async function() {
    return request.jsonp(rootAddress + '/table-list').then(response => {
      if (response.code === 1 /* 成功 */) {
        return response.data;
      }
      return reject(response);
    });
  };

  return service;
}
