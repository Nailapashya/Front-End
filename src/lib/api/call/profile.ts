import { AxiosResponse } from "axios";
import { API } from "..";
import { IProfile } from "../../../types/app";
import { ISuccessResponse } from "../../../types/response";

type TProfileResponse = AxiosResponse<ISuccessResponse<IProfile[]>>;

export const getProfile = async (id: string) => {
   return await API.get(`/profile/${id}`);
};

export const getProfiles = async (): Promise<TProfileResponse> => {
   return await API.get(`/profile`);
};
