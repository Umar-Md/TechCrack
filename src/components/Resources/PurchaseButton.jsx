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
      const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;
      if (!razorpayKey || !String(razorpayKey).trim()) {
        console.error("Missing VITE_RAZORPAY_KEY_ID in frontend environment.");
        alert("Payment setup is incomplete. Razorpay key is missing.");
        return;
      }

      // 2. Prepare Price and Initiate Order
      const cleanPrice =
        typeof product.price === "string"
          ? product.price.replace(/[^0-9.]/g, "")
          : product.price;

      const order = await paymentService.createOrder(
        cleanPrice,
        product.id,
        String(userEmail).trim()
      );

      const options = {
        key: razorpayKey,
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
              // 4. Download Logic - Aligned with your Backend /pdfs route
              const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || "http://localhost:5000").replace(/\/$/, "");
              
              // Map product IDs to actual filenames in E:\TechCrack\server\assets\pdfs\
              const fileMap = {
                java: "Java.pdf",
                javascript: "JavaScript.pdf",
                python: "Python.pdf",
                sql: "sql.pdf",
                email_resume_templates: "Email_Resume_templates.pdf",
                "email-resume-templates": "Email_Resume_templates.pdf",
              };

              const fileName = result.fileName || fileMap[normalizedProductId];
              const downloadPath = result.downloadUrl || (fileName ? `/pdfs/${fileName}` : "");

              if (fileName && downloadPath) {
                // We use a direct link because your backend Express app 
                // already sends 'Content-Disposition: attachment'
                const downloadUrl = `${apiBaseUrl}${downloadPath}`;
                
                const link = document.createElement("a");
                link.href = downloadUrl;
                link.setAttribute("download", fileName);
                document.body.appendChild(link);
                link.click();
                link.remove();

                if (result.emailSent === false) {
                  alert("Payment verified. PDF download started, but email delivery failed.");
                } else {
                  alert("Success! Your PDF is downloading and a copy was sent to your email.");
                }
              } else {
                alert("Payment verified, but file not found in map. Please check your email.");
              }
            } else {
              alert(result.message || "Payment verification failed.");
            }
          } catch (err) {
            console.error("Verification Error:", err);
            const backendMessage = err?.response?.data?.message;
            alert(`Verification error${backendMessage ? `: ${backendMessage}` : "."}`);
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
      alert("Could not start payment. Please ensure your backend is reachable.");
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
      Buy for ₹{product.price}
    </button>
  );
};

export default PurchaseButton;
