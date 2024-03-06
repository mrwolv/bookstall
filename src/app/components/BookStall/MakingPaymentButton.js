import { Button } from "@/components/ui/button";
import React from "react";
import Script from "next/script";

const MakingPaymentButton = ({ selectedPrice,selectedStallNumber }) => {
  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    const data = await fetch("/api/razorpay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        taxAmt: selectedPrice,
        stallNumber:selectedStallNumber
      }),
    }).then((t) => t.json());
    console.log(data);
    var options = {
      key:  process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Thor Solution PVT ltd",
      currency: data.currency,
      stallNumber:data.stallNumber,
      amount: data.taxAmt,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image: "https://manuarora.in/logo.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Thor Solutions",
        email: "thorsolutions@gmail.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  /* To initialise a payment, we need to add Razorpay's checkout script into our code. */

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  return (
    <>
      {/* <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      /> */}
      <Button
        className="bg-[#F8669E] hover:bg-[#F8669E] rounded "
        onClick={makePayment}
      >
        Book Now
      </Button>
    </>
  );
};

export default MakingPaymentButton;
