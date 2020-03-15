import apiKey from "./apiKey.js"
import API from "./apiManager.js"

const searchInput = document.querySelector("#searchInput")
const searchBtn = document.querySelector("#searchBtn");
let string = ""

searchBtn.addEventListener("click", () => {
  const keyword = searchInput.value.split(" ");
  for (let i = 0; i < keyword.length; i++)
    if (i < keyword.length - 1) {
      string += keyword[i] + `+`
    } else {
      string += keyword[i]
    }
    console.log("string", string)

  API.search(string)
    .then(movie => {
      console.log(movie)
      const movieObject = {
        title: `${movie.results[0].title}`,
        date: `${movie.results[0].release_date}`
      }
      API.saveToJSON(movieObject, "movies")
      .then(() => {
        string =""
      searchInput.value=""
    })
    })
})





// API.searchWithId("343611")
//   .then(movie => console.log(movie))

console.log("what up my man?")
