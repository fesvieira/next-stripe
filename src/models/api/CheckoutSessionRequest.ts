export type CheckoutSessionRequest = {
  line_items: CheckoutSessionLineItems[];
  mode: PaymentMode;
};

export type CheckoutSessionLineItems = {
  price: string;
  quantity: number;
};

export enum PaymentMode {
  PAYMENT = "payment",
}
