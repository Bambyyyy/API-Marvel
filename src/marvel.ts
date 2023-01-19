const ApiUrl = "https://mcuapi.herokuapp.com/api/v1/movies";
const movieName = document.getElementById("movie-name") as HTMLDivElement;
const button = document.getElementById("btn") as HTMLButtonElement;
const releaseDate = document.getElementById(
  "release-date"
) as HTMLParagraphElement;
const overview = document.getElementById("overview") as HTMLDivElement;
const coverUrl = document.getElementById("cover-url") as HTMLDivElement;

button.addEventListener("click", async function getAPI() {
  // event.preventDefault();
  movieName.innerHTML = "";
  releaseDate.innerHTML = "";
  overview.innerHTML = "";
  coverUrl.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    const response = await fetch(ApiUrl);
    const data = await response.json();
    movieName.append(`Name: ${data.data[i].title}`);
    releaseDate.append(`Release Date: ${data.data[i].release_date}`);
    overview.append(`Description: ${data.data[i].overview}`);
    // coverUrl.append(`${data.data[0].cover_url}`);
    // coverUrl.className = "cover-img";
    // coverUrl.innerHTML = data.data[0].cover_url;
    coverUrl.innerHTML = `<img src="${data.data[i].cover_url}">`;
    // console.log(data.data[0].title);
  }
});

// getAPI();
