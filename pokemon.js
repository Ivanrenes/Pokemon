window.addEventListener("loaded", writing());

function writing() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
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
            var container = document.querySelector("#div");

            var template = `
	      <div class="divImg">
		<div class="display-P">
		    <img src="${ImgPokemon}">
		</div>
		<div class="N-pokemon">
		    	<p class="P-pokemon">${pokemonName}</p>
		</div>
	      </div> 
       
       `;
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
