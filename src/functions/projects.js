import axios from "axios";

export const fetchProjects = async() => {
    return await axios.get("https://profile-backend-topaz.vercel.app/api");
}
export const getProjects = async() => {
    return await axios.get("https://profile-backend-topaz.vercel.app/api");
}