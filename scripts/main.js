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

  const searchStack = (input) => {
    return API.search(input)
    .then(movie => {
       const dbid = `${movie.results[0].id}`
      API.searchWithId(dbid)
        .then(movieById => {
          console.log(movieById)
          const movieObject = {
            title: movieById.title,
            date: movieById.release_date,
            dbid: `${movieById.id}`
          }
          API.saveToJSON(movieObject, "movies")
        })
    })
  }

  // searchStack(string);
  
})
API.search("magnolia")
  .then(movie =>  console.log(movie))
// API.searchWithId("343611")
//   .then(movie => console.log(movie))

console.log("what up my man?")
