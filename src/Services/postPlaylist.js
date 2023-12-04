import axios from "axios";
import { HEADER, accessToken, endPoint } from "./track";

export const PostPlaylist = async (playlistName, trackIds) => {
  // get usersid
  await axios
    .get(`${endPoint}/me`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then(async (resp) => {
      const userId = resp.data.id;

      // create new playlist
      await axios
        .post(
          `${endPoint}/users/${userId}/playlists`,
          { name: playlistName },
          { headers: HEADER }
        )
        .then(async (playlistResp) => {
          const playlistId = playlistResp.data.id;

          // add track to new playlist
          await axios
            .post(
              `${endPoint}/users/${userId}/playlists/${playlistId}/tracks`,
              { uris: trackIds.map((trackId) => `spotify:track:${trackId}`) },
              { headers: HEADER }
            )
            .then((addTracksResp) =>
              console.log("Tracks added successfully:", addTracksResp.data)
            );
        });
    });
};
