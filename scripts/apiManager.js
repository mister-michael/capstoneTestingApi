import apiKey from "../scripts/apiKey.js"
const searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=";
const detailsUrl = "https://api.themoviedb.org/3/movie/";
const jsonUrl = "http://localhost:5002/";

// https://api.themoviedb.org/3/movie/343611?api_key=

const API = {
  search(keyword) {
    return fetch(searchUrl + apiKey + "&query=" + keyword).then(entries => entries.json());
  },
  searchWithId(id) {
    return fetch(detailsUrl + id + "?api_key=" + apiKey).then(entries => entries.json());
  },
  saveToJSON(objToSave, str) {
    return fetch(jsonUrl + str, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(objToSave)
    })
  },
}

export default API;

