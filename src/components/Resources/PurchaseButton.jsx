import React from "react";
import { paymentService } from "../../services/paymentServices.jsx";

const PurchaseButton = ({ product, userEmail }) => {
  const handlePayment = async () => {
    // 1. Validations
    if (!userEmail || !String(userEmail).trim()) {
      alert("Please enter your email before payment.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(userEmail).trim())) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load. Please check your internet connection.");
      return;
    }

    try {
      const envRazorpayKey = String(import.meta.env.VITE_RAZORPAY_KEY_ID || "").trim();

      // 2. Prepare Price and Initiate Order
      const cleanPrice =
        typeof product.price === "string"
          ? product.price.replace(/[^0-9.]/g, "")
          : product.price;

      const order = await paymentService.createOrder(cleanPrice);
      const activeRazorpayKey = String(order?.keyId || envRazorpayKey).trim();

      if (!activeRazorpayKey) {
        alert("Payment setup is incomplete. Razorpay key is missing.");
        return;
      }

      const options = {
        key: activeRazorpayKey,
        amount: order.amount,
        currency: order.currency,
        name: "TechCrack",
        description: `Guide: ${product.title}`,
        order_id: order.id,
        prefill: {
          email: String(userEmail).trim(),
        },
        notes: {
          pdfId: String(product.id).trim().toLowerCase(),
          email: String(userEmail).trim(),
        },
        theme: {
          color: "#06b6d4",
        },

        handler: async function (response) {
          try {
            const normalizedProductId = String(product.id).trim().toLowerCase();

            // 3. Verify Payment
            const result = await paymentService.verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              email: String(userEmail).trim(),
              pdfId: normalizedProductId,
            });

            if (result.status === "success") {
              if (result.emailSent === false) {
                const emailError = result.emailError
                  ? ` Details: ${result.emailError}`
                  : "";
                alert(`Payment verified, but email delivery failed.${emailError}`);
              } else {
                alert("Payment successful. PDF has been sent to your email.");
              }
            } else {
              alert(result.message || "Payment verification failed.");
            }
          } catch (err) {
            console.error("Verification Error:", err);
            const backendMessage = err?.response?.data?.message;
            const emailError = err?.response?.data?.emailError;
            alert(
              `Verification error${backendMessage ? `: ${backendMessage}` : "."}${
                emailError ? ` Details: ${emailError}` : ""
              }`
            );
          }
        },
        modal: {
          ondismiss: function () {
            console.log("Payment window closed");
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Initiation Error:", error);
      const backendMessage = error?.response?.data?.message;
      const backendDetails = error?.response?.data?.details;
      const fallbackMessage = error?.message;
      alert(
        backendMessage
          ? `Could not start payment: ${backendMessage}${backendDetails ? ` (${backendDetails})` : ""}`
          : `Could not start payment${fallbackMessage ? `: ${fallbackMessage}` : ". Please ensure your backend is reachable."}`
      );
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={!userEmail || !String(userEmail).trim()}
      className={`px-6 py-2 rounded-xl font-bold transition-all shadow-lg active:scale-95
      ${
        !userEmail || !String(userEmail).trim()
          ? "bg-gray-600 text-gray-400 cursor-not-allowed"
          : "bg-cyan-500 hover:bg-cyan-400 text-black"
      }`}
    >
      Buy for Rs. {product.price}
    </button>
  );
};

export default PurchaseButton;

