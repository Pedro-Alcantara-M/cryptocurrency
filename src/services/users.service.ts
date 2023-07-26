import { apiUsers } from "@services/api";
import { IUsersResp, IUser, ICreateUserResp } from "./interface";

type IParams = {
  email: string;
  password: string;
};

export const getUsersRequest = async (params: IParams): Promise<IUsersResp> => {
  const resp: IUsersResp = {
    data: null,
    status: null,
  };

  return apiUsers
    .get<IUser[]>("users/", { params })
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

export const createUser = (body?: IUser | null): Promise<ICreateUserResp> => {
  const resp: ICreateUserResp = {
    data: null,
    status: null,
  };

  return apiUsers
    .post("users/", {
      photo: "https://xsgames.co/randomusers/avatar.php?g=male",
      ...body,
    })
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
