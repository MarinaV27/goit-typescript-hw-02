import axios from "axios"
import { Image } from "./types";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getImages = async (
    topic: string,
    currentPage: number,
    total_page: number = 12): Promise<Image[]> => {
    const response = await axios.get<{ results: Image[]}>("/search/photos", {
        params: {
            query: topic,
            page: currentPage,
            total_page, 
            client_id: "lCByx5oE9A4Wh03fBg0q_fqY7QBQgX47nJuKCWf3UCw"

        }
    });

    return response.data.results;
};