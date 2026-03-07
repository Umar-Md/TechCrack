import axios from "axios";

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "http://localhost:5000").trim().replace(/\/$/, "");
const API_URL = `${API_BASE_URL}/api/payment`;

export const paymentService = {

  createOrder: async (amount) => {

    try {

      console.log("Creating order with amount:", amount);

      const response =
        await axios.post(`${API_URL}/create-order`, {
          amount,
        });

      console.log("CreateOrder response:", response.data);

      return response.data;

    } catch (error) {

      console.error(
        "CreateOrder Service Error:",
        error.response?.data || error.message
      );

      throw error;
    }
  },

  verifyPayment: async (paymentData) => {

    try {

      console.log("VerifyPayment sending:", paymentData);

      const response =
        await axios.post(`${API_URL}/verify`, paymentData);

      console.log("VerifyPayment response:", response.data);

      return response.data;

    } catch (error) {

      console.error(
        "VerifyPayment Service Error:",
        error.response?.data || error.message
      );

      throw error;
    }
  },
};
