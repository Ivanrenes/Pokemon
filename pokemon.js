const button = document.querySelector("#button");
const search = document.querySelector("#search");
const arrayFecht = [];

search.addEventListener(
  "keyup",
  delay(function () {
    let search = document.getElementById("search").value;
    console.log(search);
  }, 600)
);

window.addEventListener("loaded", writing());

function writing() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=5";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let pokemons = data.results;
      let pokemonNames = pokemons.map((x) => x.name);
      console.log(pokemonNames);
      pokemonNames.forEach((pokemonName) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
          .then((response) => response.json())
          .then((imgdata) => {
            const ImgPokemon = imgdata.sprites.front_shiny;
            var container = document.querySelector("#divImg");

            var template = `
	      <div class="container">
  <div class="card img-fluid" style="width:500px">
    <img class="card-img-top" src="${ImgPokemon}" alt="Card image" style="width:100%">
    <div class="card-img-overlay">
      <h4 class="card-title">${pokemonName}</h4>
     
    </div>
  </div>
</div>	    `;
            container.innerHTML += template;
          });
      });

      console.log(data);
    });
}

function delay(callback, ms) {
  var timer = 0;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(context, args);
    }, ms || 0);
  };
}
