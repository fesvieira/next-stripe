import { api } from "@/services/api";
import Stripe from "stripe";
import { AppAxiosResponse, AppNextRequest, AppNextResponse } from "./NextCore";
import { Constants } from "@/constants/Constants";
import { stripe } from "@/services/stripe";

export function listProducts() {
  return api.get<
    string,
    AppAxiosResponse<Stripe.Response<Stripe.ApiList<Stripe.Product>>, string>
  >(Constants.url.nextApi.stripe.listProducts);
}

export default async function handler(
  req: AppNextRequest<string>,
  res: AppNextResponse<Stripe.Response<Stripe.ApiList<Stripe.Product>>, string>
) {
  return stripe.products
    .list({ expand: ["data.default_price"] })
    .then((response) => {
      return res.status(200).send({ data: response });
    })
    .catch((err) => {
      return res.status(400).send({ error: `${err}` });
    });
}
