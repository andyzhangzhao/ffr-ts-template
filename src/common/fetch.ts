import { AxiosError, AxiosResponse } from 'axios';

const dataFormat = ['code', 'data', 'msgCode', 'msgContent'];

const formatResponseData = (data: { [index: string]: any }) => {
  const dataType = typeof data;
  if (dataType === 'undefined' || data === null) {
    data = {};
  } else if (dataType === 'object') {
    const keys = Object.keys(data);
    const tempArr = keys.filter(key => dataFormat.indexOf(key) === -1);
    if (keys.length === dataFormat.length && tempArr.length === 0) {
      return data;
    }
  } else if (dataType === 'string' && !data) {
    data = {};
  }

  return {
    code: 200,
    data,
    msgCode: null,
    msgContent: 'success'
  };
};

declare module 'axios' {
  export interface AxiosRequestConfig {
    showGlobalLoading?: boolean;
  }
}

const axiosFetch = import('dhubShell/fetch').then(module => {
  const axiosFetch = module.default({
    showGlobalLoading: true
  });

  axiosFetch.interceptors.response.use(
    (response: AxiosResponse) => {
      const { showSuccess = false, fullResponse = false } = response.config;
      const responseData = formatResponseData(response.data);
      const { code, data, msgContent, msgCode } = responseData;
      if (code === 200) {
        if (msgCode) {
          return Promise.reject({
            response: {
              data: msgContent,
              status: code || msgCode
            }
          });
        }
        return Promise.resolve(data);
      }
      return Promise.reject({
        response: {
          data: msgContent,
          status: code || msgCode
        }
      });
    },
    (error: AxiosError) => {
      const finalError: {
        [index: string]: any;
      } = {};

      if (error.response) {
        finalError.errorCode = error.response.status;
        finalError.errorMsg = error.response.data;
      } else if (error.request) {
        finalError.errorCode = 'none';
        finalError.errorMsg = error.request;
      } else {
        finalError.errorCode = 'none';
        finalError.errorMsg = error.message;
      }
      return Promise.reject(finalError);
    }
  );

  return axiosFetch;
});

export default axiosFetch;
