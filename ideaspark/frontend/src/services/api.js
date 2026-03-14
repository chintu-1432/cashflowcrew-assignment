import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const getIdeas = () => API.get("/ideas");
export const createIdea = (data) => API.post("/ideas", data);
export const upvoteIdea = (id) => API.patch(`/ideas/${id}/upvote`);