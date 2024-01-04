import { api } from "@/services/api";
import { AppAxiosResponse, AppNextRequest, AppNextResponse } from "./NextCore";
import Stripe from "stripe";
import { Constants } from "@/constants/Constants";
import { stripe } from "@/services/stripe";
import {
  CheckoutSessionRequest,
  PaymentMode,
} from "@/models/api/CheckoutSessionRequest";

export function checkoutProduct(req: CheckoutSessionRequest) {
  return api.post<
    AppNextRequest<CheckoutSessionRequest>,
    AppAxiosResponse<Stripe.Response<Stripe.Checkout.Session>, string>
  >(Constants.url.nextApi.stripe.checkout, req);
}

export default async function handler(
  req: AppNextRequest<CheckoutSessionRequest>,
  res: AppNextResponse<Stripe.Response<Stripe.Checkout.Session>, string>
) {
  return stripe.checkout.sessions
    .create({
      line_items: req.body.line_items,
      mode: req.body.mode,
      success_url: `${req.headers.origin}`,
      cancel_url: `${req.headers.origin}`,
    })
    .then((response) => {
      return res.status(200).send({ data: response });
    })
    .catch((err) => {
      return res.status(400).send({ error: `${err}` });
    });
}
