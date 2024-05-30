import axios from "axios"

axios.defaults.baseURL = "https://api.unsplash.com";

export const getImages = async (topic, currentPage) => {
    const response = await axios.get("/search/photos", {
        params: {
            query: topic,
            page: currentPage,
            per_page: 9,
            client_id: "lCByx5oE9A4Wh03fBg0q_fqY7QBQgX47nJuKCWf3UCw"

        }
    });

    return response.data.hits;
};