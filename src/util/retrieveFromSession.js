const forLocalSessionKey = (dataType) => {
  if(dataType === "Recommendations") {
    return "Recommendations";
  } else if(dataType === "Name") {
    return "Name";
  } else {
    return "Playlist";
  }
}

const retrieveFromSession = (dataType) => {
  const localSessionKey = forLocalSessionKey(dataType)

  const storedData = sessionStorage.getItem(localSessionKey);
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};

export default retrieveFromSession;