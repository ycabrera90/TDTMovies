// v1.0.5
const setUrlParams = (url: string, params: any): string => {
  let modiefiedUrl;
  if (params) {
    let urlWithParams = new URL(url);
    Object.keys(params).forEach((key) => {
      urlWithParams.searchParams.append(key, params[key]);
    });
    modiefiedUrl = urlWithParams.href;
  } else {
    modiefiedUrl = url;
  }
  return modiefiedUrl;
};

export interface IOptionsObject {
  headers?: HeadersInit;
  params?: { [key: string]: string };
}

export interface IHttpClient {
  get: (url: string, options: IOptionsObject) => Promise<any>;
}

const httpClient: IHttpClient = {
  get: async (url, { headers, params }) => {
    const urlWhitParams = setUrlParams(url, params);

    try {
      const response = await fetch(urlWhitParams, { method: "GET", headers });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message || responseData.status_message || "Something went wrong!");
      }
      return responseData;
    } catch (error) {
      throw error;
    }
  },
};

export default httpClient;
