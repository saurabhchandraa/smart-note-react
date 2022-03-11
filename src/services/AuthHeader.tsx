import { AxiosRequestHeaders } from "axios";

export default function authHeader(): AxiosRequestHeaders {
  const user = localStorage.getItem("userDetails");
  let userDetails = null;
  if(user) userDetails = JSON.parse(user);
  if (userDetails && userDetails.jwtToken) {
    return { Authorization: `Bearer ${userDetails.jwtToken}` };
  } else {
    return {};
  }
}
