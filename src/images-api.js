import axios from "axios"

axios.defaults.baseURL = "https://api.unsplash.com";

export const getImages = async (topic, currentPage, total_page = 12) => {
    const response = await axios.get("/search/photos", {
        params: {
            query: topic,
            page: currentPage,
            total_page, 
            client_id: "lCByx5oE9A4Wh03fBg0q_fqY7QBQgX47nJuKCWf3UCw"

        }
    });

    return response.data.hits;
};