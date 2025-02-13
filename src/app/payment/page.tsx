'use client';

import CheckoutForm from "@/components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

function PaymentPageContent() {
  const searchParam = useSearchParams();
  const amount = searchParam.get("amount");

  return (
    <Elements stripe={stripePromise} options={{ mode: "payment", currency: "usd", amount: Number(amount) }}>
      <CheckoutForm amount={Number(amount)} />
    </Elements>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div>Loading payment details...</div>}>
      <PaymentPageContent />
    </Suspense>
  );
}
