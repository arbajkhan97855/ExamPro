const API_URL = import.meta.env.VITE_API_URL;

// Create Order
export const createOrder = async (data) => {

    const token = localStorage.getItem("token");

    const response = await fetch(
        `${API_URL}/payment/create-order`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },

            body: JSON.stringify(data)
        }
    );

    return await response.json();

};

// Verify Payment
export const verifyPayment = async (data) => {

    const token = localStorage.getItem("token");

    const response = await fetch(
        `${API_URL}/payment/verify`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },

            body: JSON.stringify(data)
        }
    );

    return await response.json();

};