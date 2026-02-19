import React from "react";
import { paymentService } from "../../services/paymentServices.jsx";

const PurchaseButton = ({ product, userEmail }) => {

  const handlePayment = async () => {

    /* ✅ ADDED: email required check */
    if (!userEmail || !String(userEmail).trim()) {
      alert("Please enter your email before payment.");
      return;
    }

    /* ✅ ADDED: email format validation */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(String(userEmail).trim())) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!window.Razorpay) {
      alert(
        "Razorpay SDK failed to load. Please check your internet connection.",
      );
      return;
    }

    try {

      const cleanPrice =
        typeof product.price === "string"
          ? product.price.replace(/[^0-9.]/g, "")
          : product.price;

      const order = await paymentService.createOrder(cleanPrice);

      const options = {

        key: import.meta.env.VITE_RAZORPAY_KEY_ID,

        amount: order.amount,

        currency: order.currency,

        name: "TechCrack",

        description: `Guide: ${product.title}`,

        order_id: order.id,

        prefill: {
          email: String(userEmail).trim(), /* ✅ ensured clean email */
        },

        theme: {
          color: "#06b6d4",
        },

        handler: async function (response) {

          try {

            const normalizedProductId = String(product.id)
              .trim()
              .toLowerCase();

            const result = await paymentService.verifyPayment({

              razorpay_order_id: response.razorpay_order_id,

              razorpay_payment_id: response.razorpay_payment_id,

              razorpay_signature: response.razorpay_signature,

              email: String(userEmail).trim(),

              pdfId: normalizedProductId,

            });

            if (result.status === "success") {

              const fileMap = {

                java: "Java.pdf",

                javascript: "JavaScript.pdf",

                python: "Python.pdf",

                sql: "sql.pdf",

                email_resume_templates: "Email_Resume_templates.pdf",

                "email-resume-templates": "Email_Resume_templates.pdf",

              };

              const fileName =
                result.fileName || fileMap[normalizedProductId];

              const downloadUrl = result.downloadUrl
                ? `http://localhost:5000${result.downloadUrl}`
                : `http://localhost:5000/pdfs/${encodeURIComponent(fileName)}`;

              if (fileName) {

                const link = document.createElement("a");

                link.href = downloadUrl;

                link.setAttribute("download", `${product.title}.pdf`);

                document.body.appendChild(link);

                link.click();

                link.remove();

                alert(
                  "Success! PDF downloaded and sent to your email."
                );

              } else {

                alert("Payment verified, but file not found in map.");

              }

            } else {

              alert("Payment verification failed.");

            }

          } catch (err) {

            const serverMsg = err?.response?.data?.message;

            console.error(
              "Verification Error:",
              err?.response?.data || err.message,
            );

            alert(
              serverMsg ||
                "Payment successful, but delivery failed. Please check your email.",
            );

          }

        },

        modal: {

          ondismiss: function () {

            console.log("Payment window closed by user");

          },

        },

      };

      const rzp = new window.Razorpay(options);

      rzp.open();

    } catch (error) {

      console.error(
        "Payment Initiation Error:",
        error?.response?.data || error.message,
      );

      alert("Could not start payment. Is your backend server running?");

    }

  };

  return (

    <button
      onClick={handlePayment}

      /* ✅ ADDED: disable button if email empty */
      disabled={!userEmail || !String(userEmail).trim()}

      className={`px-6 py-2 rounded-xl font-bold transition-all shadow-lg active:scale-95
      ${
        !userEmail || !String(userEmail).trim()
          ? "bg-gray-600 text-gray-400 cursor-not-allowed"
          : "bg-cyan-500 hover:bg-cyan-400 text-black"
      }`}
    >

      Buy for ₹{product.price}

    </button>

  );

};

export default PurchaseButton;
