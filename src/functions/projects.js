import axios from "axios";

export const fetchProjects = async() => {
    return await axios.get("http://localhost:8000/api");
}
export const getProjects = async() => {
    return await axios.get("http://localhost:8000/api/");
}