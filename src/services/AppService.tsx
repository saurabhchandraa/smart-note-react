import axios from "axios";
import authHeader from "./AuthHeader";

const BASE_URL = "http://localhost:8080/vocabulary/";

interface Words {
  id: number;
  word: string;
  meaning: string;
}

export const postVocabulary = (word: string, meaning: string) => {
  console.log('Send Post request');
  console.log(authHeader());
  return axios.post(
    "http://localhost:8080/vocabulary",
    {
      word: word,
      meaning: meaning,
    },
    {
      headers: authHeader(),
    }
  );
};

export const getVocabularyData = () => {
  const user = localStorage.getItem("userDetails");
  let userDetails = null;
  let id = null;
  if(user) userDetails = JSON.parse(user);
  if (userDetails) {
    id = userDetails.id;
  }
  console.log(`ID FOR GET: ${id}`);
  return axios.get<Words[]>(`http://localhost:8080/vocabulary/${id}`, {
    headers: authHeader(),
  });
};
