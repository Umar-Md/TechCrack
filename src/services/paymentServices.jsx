import axios from "axios";

const DEFAULT_PROD_API_BASE_URL = "https://techcrack-vmke.onrender.com";

const normalizeBase = (url) => String(url || "").trim().replace(/\/$/, "");

const getApiBaseUrl = () => {
  const envBase = (import.meta.env.VITE_API_BASE_URL || "").trim().replace(/\/$/, "");
  if (envBase) {
    return envBase;
  }

  if (typeof window !== "undefined" && window.location.hostname !== "localhost") {
    return window.location.origin;
  }

  return "http://localhost:5000";
};

const getApiBaseCandidates = () => {
  const envBase = normalizeBase(import.meta.env.VITE_API_BASE_URL);
  const fromResolver = normalizeBase(getApiBaseUrl());
  const localBase = "http://localhost:5000";
  const browserBase =
    typeof window !== "undefined" ? normalizeBase(window.location.origin) : "";

  const candidates = [envBase, fromResolver, browserBase, DEFAULT_PROD_API_BASE_URL, localBase]
    .filter(Boolean)
    .filter((value, index, arr) => arr.indexOf(value) === index);

  return candidates;
};

const postWithFallback = async (path, payload) => {
  const baseCandidates = getApiBaseCandidates();
  let lastError = null;

  for (const baseUrl of baseCandidates) {
    try {
      const response = await axios.post(`${baseUrl}/api/payment${path}`, payload);
      return { data: response.data, baseUrl };
    } catch (error) {
      lastError = error;
      if (error.response) {
        const status = Number(error.response.status);
        const shouldRetryOnAnotherBase =
          status === 404 || status === 405 || status >= 500;

        if (!shouldRetryOnAnotherBase) {
          throw error;
        }
      }
      console.warn(`Payment API unreachable at ${baseUrl}`, error.message);
    }
  }

  const tried = baseCandidates.join(", ");
  const wrappedError = new Error(`Payment API unreachable. Tried: ${tried}`);
  wrappedError.cause = lastError;
  throw wrappedError;
};

export const paymentService = {
  _activeApiBaseUrl: normalizeBase(getApiBaseUrl()),

  getActiveApiBaseUrl() {
    return this._activeApiBaseUrl;
  },

  createOrder: async (amount) => {

    try {

      console.log("Creating order with amount:", amount);

      const { data, baseUrl } = await postWithFallback("/create-order", { amount });
      paymentService._activeApiBaseUrl = baseUrl;
      console.log("CreateOrder response:", data);
      return data;

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

      const { data, baseUrl } = await postWithFallback("/verify", paymentData);
      paymentService._activeApiBaseUrl = baseUrl;
      console.log("VerifyPayment response:", data);
      return data;

    } catch (error) {

      console.error(
        "VerifyPayment Service Error:",
        error.response?.data || error.message
      );

      throw error;
    }
  },
};
