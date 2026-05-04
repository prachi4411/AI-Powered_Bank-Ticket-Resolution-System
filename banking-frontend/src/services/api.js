const BASE_URL = "http://localhost:8085";

export default BASE_URL;   
export const authHeaders = () => ({
  "Content-Type": "application/json",
  "Authorization": "Bearer " + localStorage.getItem("token")
});