const btnEl = document.getElementById("btn");
const animeEl = document.querySelector(".character");

const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");



btnEl.addEventListener("click",async function(){
    try {

        btnEl.disabled = true
        btnEl.innerText = "loading....";

        animeNameEl.innerText = "updating...";
        animeImgEl.src = "Rolling.svg"

        const response =await fetch("https://api.catboys.com/img" )
        const result = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = "Get Anime"


        animeEl.style.display = "block";
        animeImgEl.src = result.url;
        animeNameEl.innerText = result.artist
        // console.log(result)
    } catch (error) {
        console.log(error);
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime"
        animeNameEl.innerText = "An Error Happen , try again later";

    }
});