import axios from "axios";

// const BASE_URL = "http://localhost:8080/api/";
const BASE_URL = "https://evoyqgplf6.execute-api.ap-south-1.amazonaws.com/prod/api/";

export const register = (signUpRequest: any) => {
  return axios.post(BASE_URL + "auth/signup", signUpRequest);
};

export const login = (username: any, password: any) => {
  return axios
    .post(BASE_URL + "auth/signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("userDetails", JSON.stringify(response.data));
        localStorage.setItem("isLoggedIn", "1");
        localStorage.setItem("name", response.data.firstName);
        console.log(response.data);
      }
      return response.data;
    });
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("userDetails");
  let userDetails = null;
  if (user) userDetails = JSON.parse(user);
  return userDetails;
};
