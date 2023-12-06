export const alertFunciton = (playlistName, playlistTrack) => {
  if (!playlistName && playlistTrack.length === 0) {
    return "Please enter a playlist name & add tracks before saving.";
  } else if (!playlistName) {
    return "Please enter a playlist name.";
  } else if (playlistTrack.length === 0) {
    return "Your playlist is empty. Add tracks before saving.";
  }

  return "";
};
