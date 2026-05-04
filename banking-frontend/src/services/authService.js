const BASE_URL = "http://localhost:8085/api/auth";

export const registerUser = async (data) => {
  const res = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

//   const result = await res.json();

//   if (!res.ok) throw result;

//   return result;
// };

let result;
  try {
    result = await res.json();
  } catch {
    result = { error: "Server error" };
  }

  if (!res.ok) throw result;

  return result;
};
export const loginUser = async (data) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: data.username,
      password: data.password
    })
  });

  // const result = await res.json();

  // if (!res.ok) throw result;

  // return result;

  let result;
  try {
    result = await res.json();
  } catch {
    result = { error: "Server error" };
  }

  if (!res.ok) throw result;

  return result;
};