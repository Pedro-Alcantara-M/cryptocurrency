import { api } from "@services/api";
import { IUsersResp, IUser, ICreateUserResp } from "./interface";


export const getUsersRequest = async (): Promise<IUsersResp> => {
  const resp: IUsersResp = {
    data: null,
    status: null,
  };

  return api
    .get<IUser[]>("users/")
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

  return api
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

export const updateUser = (id?: number, body?: IUser | null): Promise<ICreateUserResp> => {
  const resp: ICreateUserResp = {
    data: null,
    status: null,
  };

  return api
    .put(`users/${id}`, body)
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

export const updateUserCrypto = (id?: number, body?: IUser | null): Promise<ICreateUserResp> => {
  const resp: ICreateUserResp = {
    data: null,
    status: null,
  };

  return api
    .patch(`users/${id}`, body)
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

