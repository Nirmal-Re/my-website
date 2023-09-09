import axios from "axios";

const BACKEND_URL = "http://localhost:5000";

const postRequest = () => {};

const getRequest = async (url) => {
  const data = await axios.get(`${BACKEND_URL}${url}`);
  console.log(data);
};

export { getRequest, postRequest };
