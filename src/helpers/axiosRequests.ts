import axios from 'axios';

const makeAPIRequest = async (method: any, url: any, data: any, params: any) =>
  new Promise(async (resolve, reject) => {
    const options = {
      ...{
        method,
        url,
        data,
        params,
      },
    };

    axios(options)
      .then(async response => {
        if (response?.status === 200 || response?.status === 201) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(async error => {
        reject(error);
      });
    return null;
  });

export default makeAPIRequest;
