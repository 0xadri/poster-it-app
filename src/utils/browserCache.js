
const WEB_STORAGE_ID = "musicfan-artists";

// TODO: should: change `sessionStorage` to `localStorage`

export const setAllArtistsInCache = (artists) => {
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

export const mergeArtistsToAllArtistsInCache = (artists) => {
  const artists = sessionStorage.getItem(WEB_STORAGE_ID);
  if (artists) return JSON.parse(artists);
  sessionStorage.setItem(WEB_STORAGE_ID, JSON.stringify(favoriteActors));
}

export const getOneArtistInCache = (artist) => {
  const artists = sessionStorage.getItem(WEB_STORAGE_ID);
  if (artists) {
    artists = JSON.parse(artists);
    const oneArtist = null; // TODO: must: filter list to find item
    return artist;
  }
}

