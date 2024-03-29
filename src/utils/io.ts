/**
 * @FileName        io
 * @CreatedTime     Thu, Aug 17, 2023 14:02
 * @LastModified    Thu, Aug 17, 2023 14:02
 * @Author          QuanQuan <millionfor@apache.org>
 * @Description     io
 */

import io from '@millionfor/io';
// import cookie from '@hss/cookie';
import router from '@/router';

const reSlashPrefix = /^\/+/;
const defaultOutTime = 640000;
const apiPrefix = '/api';

const resolveURL = (url) => {
  if (url.indexOf('http') !== -1) {
    return url;
  }
  if (url.charAt(0) !== '/') {
    return `${apiPrefix}/${url.replace(reSlashPrefix, '')}`;
  }

  return url;
};

const uploadPrefix = `${resolveURL('common/upload')}`;

// const token = cookie.get('Authorization') || '';
const token = '';

/**
 * Resolve backend api url
 */
export { resolveURL, uploadPrefix, token };

/**
 * Set io default instance resolveUrl globally
 */
io.config.resolveURL = resolveURL;
io.config.timeout = defaultOutTime;

// io.config.emulateJSON = false
const _propRequest = io.request;

// Add a local request interceptor
io.request = (spec) => {
  return _propRequest.call(io, spec);
};

io.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    const { response } = JSON.parse(JSON.stringify(error));
    if (response.status === 401) {
      router.push('/login');
    }
    // 服务器错误
    if (response.status === 500) {
      router.push('/login');
    }

    return Promise.reject(error);
  },
);

// Global request interceptor registion
io.interceptors.request.use(
  (config: any) => {
    const { method } = config;
    if (method === 'get') {
      config.params = Object.assign({}, config.params, { _t: Math.random() });
    }
    config.headers.Authorization = '';
    return config;
  },
  (error: any) => {
    // Do something with request error
    return Promise.reject(error);
  },
);

export default io;
