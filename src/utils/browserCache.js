
const WEB_STORAGE_ID = "musicfan-artists";

// TODO: should: change `sessionStorage` to `localStorage`

export const setAllArtistsInCache = (artists) => {
  sessionStorage.setItem(WEB_STORAGE_ID, JSON.stringify(artists));
}

export const addOneArtistToCache = (artist) => {
  const artistsRaw = sessionStorage.getItem(WEB_STORAGE_ID);
  let artists = artistsRaw ? JSON.parse(artistsRaw) : [];
  let isPresent = false;
  for (const i in artists){
    if (artists[i].id === artist.id){
      isPresent = true;
      break;
    }
  }
  if (!isPresent){
    artists.push(artist);  // add artist
    console.log("not present, added to web storage...");
  } 
  console.log(artist);
  console.log(artists);
  sessionStorage.setItem(WEB_STORAGE_ID, JSON.stringify(artists));
}

export const getAllArtistsInCache = () => {
  const artists = sessionStorage.getItem(WEB_STORAGE_ID);
  if (artists) {
    return JSON.parse(artists)
  }
  else {
    throw new Error("Failed To Get Artists From Web Storage"); // TODO: should: only an error in certain cases, may show warning instead
  }
}

export const getOneArtistInCache = (artistName) => {
  let artists = sessionStorage.getItem(WEB_STORAGE_ID);
  artists = artists && JSON.parse(artists)
  let oneArtist = null;
  for (const i in artists){
    if (artists[i].name === artistName){
      oneArtist = {...artists[i]}; // clone
      console.log("artist in cache");
      break;
    }
  }
  return oneArtist;
}

