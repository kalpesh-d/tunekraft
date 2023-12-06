const redirectURI = "http://localhost:5173/";
// const redirectURI = "https://tunecraft.netlify.app/";

const getAccessToken = (clientId) => {
  const storedToken = localStorage.getItem("accessToken");
  const expirationTime = localStorage.getItem("expirationTime");

  if (storedToken && expirationTime && Date.now() < Number(expirationTime)) {
    // Token is still valid, return stored token
    return storedToken;
  }

  const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
  const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

  if (accessTokenMatch && expiresInMatch) {
    const accessToken = accessTokenMatch[1];
    const expiresIn = Number(expiresInMatch[1]);

    // Set the expiration time in milliseconds
    const expirationTime = Date.now() + expiresIn * 1000;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("expirationTime", expirationTime);

    // Remove access token when it expires
    setTimeout(() => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("expirationTime");
    }, expiresIn * 1000);

    window.history.pushState("Access Token", null, "/");
    return accessToken;
  } else {
    // No valid token in storage or URL, redirect for authentication
    const emailNpass = "rogot80797@getmola.com : test@123";
    const shouldAuthenticate = prompt(
      `Copy this email and password. Then you'll be redirected to Spotify Login page, If you are already logged in to your Spotify account, please log out and use this instead. \n\nEmail : Password`,
      emailNpass
    );
    if (shouldAuthenticate) {
      redirectToSpotifyAuth(clientId);
    }
  }
};

const redirectToSpotifyAuth = (clientId) => {
  const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;

  window.location = accessUrl;
};

export default getAccessToken;
