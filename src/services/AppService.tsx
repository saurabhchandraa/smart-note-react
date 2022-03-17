import axios from "axios";
import authHeader from "./AuthHeader";

// const BASE_URL = "http://localhost:8080/";
const BASE_URL = "https://i4iq9vn4b1.execute-api.ap-south-1.amazonaws.com/prod/";

interface Words {
  id: number;
  word: string;
  meaning: string;
}

interface Notepad {
  id: number;
  note: string;
}

export const postVocabulary = (word: string, meaning: string) => {
  console.log("Send Post request");
  console.log(authHeader());
  return axios.post(
    BASE_URL + "vocabulary",
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
  if (user) userDetails = JSON.parse(user);
  if (userDetails) {
    id = userDetails.id;
  }
  console.log(`ID FOR GET: ${id}`);
  return axios.get<Words[]>(BASE_URL + `vocabulary/${id}`, {
    headers: authHeader(),
  });
};

export const removeVocabularyData = (id: number) => {
  return axios.delete(BASE_URL + `vocabulary/${id}`, {
    headers: authHeader(),
  });
};

export const getNotepadData = () => {
  const user = localStorage.getItem("userDetails");
  let userDetails = null;
  let id = null;
  if (user) userDetails = JSON.parse(user);
  if (userDetails) {
    id = userDetails.id;
  }
  console.log(`ID FOR GET: ${id}`);
  return axios.get<Notepad>(BASE_URL + `notepad/${id}`, {
    headers: authHeader(),
  });
};

export const updateNotepadData = (note: string) => {
  console.log(`Send Update request with data ${note}`);
  return axios.put(
    BASE_URL + "notepad",
    {
      note: note,
    },
    {
      headers: authHeader(),
    }
  );
};
