import { api } from "@/services/api";
import { AppAxiosResponse, AppNextRequest, AppNextResponse } from "./NextCore";
import Stripe from "stripe";
import { Constants } from "@/constants/Constants";
import { stripe } from "@/services/stripe";

export function checkoutProduct(id: string) {
  return api.post<
    string,
    AppAxiosResponse<Stripe.Response<Stripe.Checkout.Session>, string>
  >(Constants.url.nextApi.stripe.checkout);
}

export default async function handler(
  req: AppNextRequest<string>,
  res: AppNextResponse<Stripe.Response<Stripe.Checkout.Session>, string>
) {
  return stripe.checkout.sessions
    .create({
      line_items: [
        {
          price: "price_1OU7mXLhAHiSTgcaVxuZA3Iq",
          quantity: 1,
        },
      ],
      mode: "payment",
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
