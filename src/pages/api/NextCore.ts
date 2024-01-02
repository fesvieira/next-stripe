import { ResponseData } from "@/models/ResponseData";
import { AxiosResponse } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export interface AppNextRequest<T> extends NextApiRequest {
  body: T;
}

export type AppNextResponse<T, R> = NextApiResponse<ResponseData<T, R>>;

export type AppAxiosResponse<T, R> = Omit<
  AxiosResponse<ResponseData<T, R>>,
  "config"
>;
