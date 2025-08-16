import axios from "axios";

export const loginUser = async (role, email, password) => {
  const url =
    role === "patient"
      ? "http://localhost:5000/api/patients/login"
      : "http://localhost:5000/api/family/login";

  const res = await axios.post(url, { email, password });
  return res.data; // contains token, user info, etc.
};
