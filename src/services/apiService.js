const BASE_URL="https://api.spotify.com/v1";

/*
 * Docs Spotify
 * https://developer.spotify.com/documentation/web-api
 */ 

function getAccessToken() {
  return localStorage.getItem('access_token');
}

function setAccessToken(token) {
  localStorage.setItem('access_token', token);
}

function clearTokens() {
  localStorage.removeItem('access_token');
}

async function refreshAccessToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body:'grant_type=client_credentials&client_id=' + import.meta.env.VITE_CLIENT_ID + '&client_secret=' + import.meta.env.VITE_CLIENT_SECRET
  });

  if (!response.ok) {
    clearTokens();
    throw new Error('Failed to refresh access token');
  }

  const data = await response.json();
  setAccessToken(data.access_token);
  return data.access_token;
}

async function apiFetch(endpoint, options = {}, retry = true) {
  const token = getAccessToken();

  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (response.status === 401 && retry) {
    try {
      const newToken = await refreshAccessToken();
      return apiFetch(endpoint, { ...options }, false); // Retry once
    } catch (err) {
      throw new Error('Unauthorized. Please log in again.');
    }
  }

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'API error');
  }

  return await response.json();
}

export const searchArtistApiService = async (searchInput) => {
  const endpoint = `/search?q=` + searchInput +'&type=artist';
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : 'Bearer ' + getAccessToken()
    }
  }
  return apiFetch(endpoint, options);
}
