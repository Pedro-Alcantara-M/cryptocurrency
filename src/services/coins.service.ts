import { apiCoin } from "@services/api";
import { ICoinResp, CryptoData } from "./interface";

export const getCoins = async (params: {
  per_page: number;
}): Promise<ICoinResp> => {
  const resp: ICoinResp = {
    data: null,
    status: null,
  };

  return apiCoin
    .get<CryptoData[]>("coins/markets", { params })
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
