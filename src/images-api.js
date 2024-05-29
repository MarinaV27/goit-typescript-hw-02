import axios from "axios"

axios.defaults.baseURL = "https://api.unsplash.com"

export const getImages = async (topic, currentPage) => {
    const response = await axios.get("/search/photos", {
        params: {
            query: topic,
            page: currentPage,
            per_page: 9,

        }
    });

    return response.data.hits;
};