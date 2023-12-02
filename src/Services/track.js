import axios from "axios";
import getAccessToken from "./accessToken";
import retrieveFromSession from "../util/retrieveFromSession";

const endPoint = "https://api.spotify.com/v1";
const endPointToken = "https://accounts.spotify.com/api/token";
const clientId = "c18250df7ccd42e583fdb1daa7dc9f16";
const clientSecret = "b2a09442ff1044cf9b033af77cf13b97";

const getAll = async (searchTrack) => {
  let accessToken = await getAccessToken(endPointToken, clientId, clientSecret);
  
  const HEADER = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  }
  
  if(searchTrack) {
    const response = await axios.get(`${endPoint}/search?q=${searchTrack}&type=album,track,artist&limit=10`, {
      headers: HEADER,
    });
    return response;
  } 
  else {
    // To avoid requesting api of recommendation tracks when the page re-renders 
    if(sessionStorage.getItem('Recommendations')) {
      return retrieveFromSession('Recommendations'); // recommendations track from sessionStorage 
    } else {
      const response = await axios.get(`${endPoint}/recommendations?limit=10&seed_genres=pop`, {
        headers: HEADER,
      })
      sessionStorage.setItem('Recommendations', JSON.stringify(response))
      return response; // From api
    }
  }
};

export default getAll;
