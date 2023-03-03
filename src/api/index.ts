import axios from "axios";

const baseUrl = process.env.REACT_APP_BASIC_API_URL;

const apiRequest = async (
  method: string,
  path: string,
  data: any,
  headers = {}
) => {
  const response = await axios({
    method,
    url: `${baseUrl}${path}`,
    data,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      ...headers,
    },
  });

  return response;
};

export default apiRequest;
