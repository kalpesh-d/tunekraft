import axios from "axios";

const endPoint = "https://api.spotify.com/v1";
const endPointToken = "https://accounts.spotify.com/api/token";
const clientId = "c18250df7ccd42e583fdb1daa7dc9f16";
const clientSecret = "b2a09442ff1044cf9b033af77cf13b97";

const getAccessToken = async () => {
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

const getAll = async (trackName) => {
  let accessToken = await getAccessToken();

  if(trackName) {
    const trackIdResponse = await axios.get(endPoint + '/search?q=' + trackName + '&type=track', {
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    
    const trackId = trackIdResponse.data.tracks.items[0].id;
    
    const response = await axios.get(endPoint + '/tracks/' + trackId, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response;
  } else {
    const response = await axios.get(endPoint + '/recommendations?' + 'limit=10&market=IN' + '&seed_genres=hiphop,country', {
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${accessToken}`,
      },
    })
    return response;
  }
};

export default getAll;
