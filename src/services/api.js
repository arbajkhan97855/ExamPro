const API_URL = import.meta.env.VITE_API_URL;

// GET API
export const getApi = async (endpoint) => {

    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}${endpoint}`, {

        method: "GET",

        headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : ""
        }

    });

    return response.json();
};


// POST API
export const postApi = async (endpoint, body) => {

    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}${endpoint}`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : ""
        },

        body: JSON.stringify(body)

    });

    return response.json();
};


// PUT API
export const putApi = async (endpoint, body) => {

    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}${endpoint}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : ""
        },

        body: JSON.stringify(body)

    });

    return response.json();
};


// DELETE API
export const deleteApi = async (endpoint) => {

    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}${endpoint}`, {

        method: "DELETE",

        headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : ""
        }

    });

    return response.json();
};