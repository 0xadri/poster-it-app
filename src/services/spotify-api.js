const SPOTIFY_BASE_URL="https://api.spotify.com/v1";

/*
 * Docs Spotify
 * https://developer.spotify.com/documentation/web-api
*/ 

const getFreshApiAccessToken = () => {
  // console.log("fetching new api access token...")
  var authParameters = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body:'grant_type=client_credentials&client_id=' + import.meta.env.VITE_CLIENT_ID + '&client_secret=' + import.meta.env.VITE_CLIENT_SECRET
  }
  fetch('https://accounts.spotify.com/api/token', authParameters)
    .then(result => result.json())
    .then(data => {
      localStorage.setItem("sat",data.access_token);
      return data.access_token;
    })
}

const getApiAccessToken = async () => {
  if (localStorage && localStorage.getItem("sat") !== null) {
    // console.log("Already got api access token")
    return localStorage.getItem("sat");
  }
  else {
    return await getFreshApiAccessToken();
  }
}

// export const searchArtist = async (searchInput) => {
//   let accessToken = await getApiAccessToken();
//   let res = await searchArtistWithin(searchInput,accessToken)
//   if (res.status === 401){
//     accessToken = await getFreshApiAccessToken();
//     res = await searchArtistWithin(searchInput,accessToken)
//   }
//   return await res.json();
// }

const searchArtistWithin = async (searchInput,accessToken) => {
  var artistParameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' + accessToken
    }
  }
  const url = `${SPOTIFY_BASE_URL}/search?q=` + searchInput +'&type=artist';
  return await fetch(url, artistParameters);
}

const searchArtist = async (searchInput) => {
  let accessToken = await getApiAccessToken();
  let jsonResponse = null;
  try {
    let res = await searchArtistWithin(searchInput,accessToken)
    if (res.status === 401){
      accessToken = await getFreshApiAccessToken();
      res = await searchArtistWithin(searchInput,accessToken)
    }
    else if (!res.ok){
      throw new Error('Failed to fetch artist, please try again');
    }
    else if (res.ok){
      jsonResponse = await res.json();
    }
  } catch(error){
    console.error(error.message);
    return {
      status: "error",
      errorMessage: error.message || 'Failed to fetch artist, please try again',
      error
    }
  }
  return {
    status: "success",
    jsonResponse
  };
}

export const searchArtistSpitFirstResult = async (searchInput) => {
  const res = await searchArtist(searchInput);
  if (res.status === "success") {
    return {
      status: "success",
      artist: res.jsonResponse.artists.items[0]
    }
  }
  else {
    return res;
  }
}

// export const searchArtistSpitFirstResult = async (searchInput) => {
//   const jsonRes = await searchArtist(searchInput);
//   return jsonRes.artists.items[0];
// }

// export const getArtist = async (artistId) => {
//   const token = await getApiAccessToken()
//   console.log(token);
//   return "Oh la la"
//   // return fetchCall(`${SPOTIFY_BASE_URL}/artists/${artistId}?query=api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
// }
