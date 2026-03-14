import axios from "axios";

const API = axios.create({
  baseURL: "https://cashflowcrew-assignment-eoxn.onrender.com/api"
});

export const getIdeas = () => API.get("/ideas");
export const createIdea = (data) => API.post("/ideas", data);
export const upvoteIdea = (id) => API.patch(`/ideas/${id}/upvote`);
