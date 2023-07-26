import {apiUsers} from "@services/api";
import { ILoginResp, IUser } from "./interface";

type IParams= {
email: string
password: string
}


export const loginRequest = async (params: IParams): Promise<ILoginResp> => {
  const resp: ILoginResp = {
    data: null,
    status: null,
  };

  return apiUsers
    .get<IUser[]>(
      "users/",
      {params}
    )
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