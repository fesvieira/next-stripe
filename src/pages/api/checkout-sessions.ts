import { api } from "@/services/api";
import { AppAxiosResponse } from "./NextCore";
import Stripe from "stripe";
import { Constants } from "@/constants/Constants";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export function checkoutProduct(id: string) {
  return api.post<
    string,
    AppAxiosResponse<Stripe.Response<Stripe.Checkout.Session>, string>
  >(Constants.url.nextApi.stripe.checkout);
}

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: "price_1OU7mXLhAHiSTgcaVxuZA3Iq",
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
