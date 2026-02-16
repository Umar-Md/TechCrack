import axios from 'axios';

// Ensure your backend server is running on this port
const API_URL = 'http://localhost:5000/api/payment';

// Use 'export const' so that you can import it as { paymentService }
export const paymentService = {
    createOrder: async (amount) => {
        try {
            const response = await axios.post(`${API_URL}/create-order`, { amount });
            return response.data;
        } catch (error) {
            console.error("Error in createOrder service:", error.response?.data || error.message);
            throw error;
        }
    },

    verifyPayment: async (paymentData) => {
        try {
            const response = await axios.post(`${API_URL}/verify`, paymentData);
            return response.data;
        } catch (error) {
            console.error("Error in verifyPayment service:", error.response?.data || error.message);
            throw error;
        }
    }
};