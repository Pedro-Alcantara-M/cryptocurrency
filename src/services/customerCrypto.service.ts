import { api } from "@services/api";
import { ICoinResp, ICoin } from "./interface";



export const getCustomerCryptoRequest = async (): Promise<ICoinResp> => {
  const resp: ICoinResp = {
    data: null,
    status: null,
  };

  return api
    .get<ICoin[]>("customerCrypto")
    .then((preResp) => {
      resp.data = preResp.data;
      resp.status = preResp.status;
      return resp;
    })
    .catch((err: any) => {
      if (err.response) {
        resp.data = null;
        resp.status = err.response.status;
      }
      return resp;
    });
};

export const createCustomerCrypto = (body?: ICoin | null): Promise<ICoinResp> => {
  const resp: ICoinResp = {
    data: null,
    status: null,
  };

  return api
    .post("customerCrypto", body)
    .then((preResp) => {
      resp.data = preResp.data;
      resp.status = preResp.status;
      return resp;
    })
    .catch((err: any) => {
      if (err.response) {
        resp.data = err.response.data;
        resp.status = err.response.status;
      }
      return resp;
    });
};

export const updateCustomerCrypto = (id?: string, body?: ICoin | null): Promise<ICoinResp> => {
  const resp: ICoinResp = {
    data: null,
    status: null,
  };

  return api
    .put(`customerCrypto/${id}`, body)
    .then((preResp) => {
      resp.data = preResp.data;
      resp.status = preResp.status;
      return resp;
    })
    .catch((err: any) => {
      if (err.response) {
        resp.data = err.response.data;
        resp.status = err.response.status;
      }
      return resp;
    });
};

export const deleteCustomerCrypto = (id?: string): Promise<ICoinResp> => {
  const resp: ICoinResp = {
    data: null,
    status: null,
  };

  return api
    .delete(`customerCrypto/${id}`)
    .then((preResp) => {
      resp.data = preResp.data;
      resp.status = preResp.status;
      return resp;
    })
    .catch((err: any) => {
      if (err.response) {
        resp.data = err.response.data;
        resp.status = err.response.status;
      }
      return resp;
    });
};
