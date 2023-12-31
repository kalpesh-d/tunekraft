import axios from "axios";
import getAccessToken from "./accessToken";
import retrieveFromSession from "../util/retrieveFromSession";

export const endPoint = "https://api.spotify.com/v1";
const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;

export let accessToken = getAccessToken(clientId);

export const HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${accessToken}`,
};

const getAll = async (searchTrack) => {
  if (searchTrack) {
    const response = await axios.get(
      `${endPoint}/search?q=${searchTrack}&type=album,track,artist&limit=10`,
      {
        headers: HEADER,
      }
    );
    return response;
  } else {
    // To avoid requesting api of recommendation tracks when the page re-renders
    if (sessionStorage.getItem("Recommendations")) {
      return retrieveFromSession("Recommendations"); // recommendations track from sessionStorage
    } else {
      const response = await axios.get(
        `${endPoint}/recommendations?limit=10&seed_genres=pop`,
        {
          headers: HEADER,
        }
      );
      sessionStorage.setItem("Recommendations", JSON.stringify(response));
      return response; // From api
    }
  }
};

export default getAll;
