import axios from "axios";

const getAccessToken = async (endPointToken, clientId, clientSecret) => {
  const response = await axios.post(endPointToken, null, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    params: {
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
    },
  });
  return response.data.access_token;
};

export default getAccessToken;