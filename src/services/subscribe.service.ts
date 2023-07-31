import { api } from "@services/api";
import { ICreateSubscribeResp } from "./interface";


export const addSubscribe = (email?: string | null): Promise<ICreateSubscribeResp> => {
  const resp: ICreateSubscribeResp = {
    data: null,
    status: null,
  };

  return api
    .post("subscribe/", {email: email})
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
