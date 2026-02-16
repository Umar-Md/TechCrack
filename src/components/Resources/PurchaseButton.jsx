import React from "react";
// Corrected relative path to match your specific file name and extension
import { paymentService } from "../../services/paymentServices.jsx"; 

const PurchaseButton = ({ product, userEmail }) => {
  const handlePayment = async () => {
    // Check if Razorpay script is loaded in index.html
    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load. Please check your internet connection.");
      return;
    }

    try {
      // 1. Format the price (removing currency symbols if any)
      const cleanPrice = typeof product.price === "string" 
        ? product.price.replace(/[^0-9.]/g, "") 
        : product.price;

      // 2. Call backend to create Order ID
      const order = await paymentService.createOrder(cleanPrice);

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Ensure this is in your .env file
        amount: order.amount,
        currency: order.currency,
        name: "TechCrack",
        description: `Guide: ${product.title}`,
        order_id: order.id,
        prefill: { email: userEmail },
        theme: { color: "#06b6d4" },
        handler: async function (response) {
          try {
            // 3. Verify Payment Signature on Backend
            const result = await paymentService.verifyPayment({
              ...response,
              email: userEmail,
              pdfId: product.id,
            });

            if (result.status === "success") {
              // 4. Trigger Instant Download from E:\TechCrack\public\pdfs\
              const fileMap = {
                "java-qa": "java.pdf",
                "js-qa": "JavaScript.pdf",
                "python-qa": "Python.pdf",
                "sql-qa": "sql.pdf",
              };

              const fileName = fileMap[product.id];
              if (fileName) {
                const link = document.createElement("a");
                link.href = `/pdfs/${fileName}`; // Browsers look in 'public' by default
                link.setAttribute("download", `${product.title}.pdf`);
                document.body.appendChild(link);
                link.click();
                link.remove();
                
                alert("Success! PDF downloaded and email sent.");
              } else {
                alert("Success! Payment verified, but file not found in download map.");
              }
            }
          } catch (err) {
            console.error("Verification Error:", err);
            alert("Payment successful, but delivery failed. Please check your email.");
          }
        },
        modal: {
          ondismiss: function() {
            console.log("Payment window closed by user");
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Initiation Error:", error);
      alert("Could not start payment. Is your backend server running?");
    }
  };

  return (
    <button 
      onClick={handlePayment} 
      className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-2 rounded-xl font-bold transition-all shadow-lg active:scale-95"
    >
      Buy for ₹{product.price}
    </button>
  );
};

export default PurchaseButton;