import axios from "axios";

const BASE_URL = "http://localhost:8080/auth/";

export const register = (signUpRequest:any) => {
  return axios.post(BASE_URL + "signup", signUpRequest);
};

export const login = (username:any, password:any) => {
  return axios
    .post(BASE_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("userDetails", JSON.stringify(response.data));
        // localStorage.setItem("userId", response.data.id);
        // localStorage.setItem("name", response.data.firstName);
        // localStorage.setItem("jwt", JSON.stringify(response.data.jwtToken));
        console.log(response.data);
      }
      return response.data;
    });
};

export const logout = () => {
  localStorage.clear();
  console.log('User Logged out Successfully');
};

export const getCurrentUser = () => {
  return localStorage.getItem("name");
};
