const BASE_URL = "http://localhost:8085/api/user";

export const getUserProfile = async () => {
  const res = await fetch(`${BASE_URL}/profile`, {
    method: "GET",
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch profile");
  }

  return res.json();
};