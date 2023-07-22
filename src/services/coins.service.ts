import api from "@services/api";
import { ICoinResp, CryptoData } from "./interface";


export const getCoins = (): Promise<ICoinResp> => {
  const resp: ICoinResp = {
    data: null,
    status: null,
  };

  return api
    .get<CryptoData[]>(
      "assets",
      {}
    )
    .then((preResp) => {
      const sortedCryptos = preResp.data.sort(
        (a, b) => b.volume_1day_usd - a.volume_1day_usd
      );
      const popularCryptos = sortedCryptos.slice(0, 10);

      const formattedData = popularCryptos.map((crypto) => ({
        asset_id: crypto.asset_id,
        name: crypto.name,
        price: crypto.price_usd,
        change: crypto.volume_1day_usd,
        idIcon: crypto.id_icon,
      }));

      resp.data = formattedData;
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