window.addEventListener("loaded", writing());

function writing() {
  for (let i = 1; i <= 25; i += 1) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const pokemon = {
          name: data.name,
          image: `https://pokeres.bastionbot.org/images/pokemon/${i}.png`,
          type: data.types.map((type) => type.type.name).join("- "),
        };
        console.log(pokemon.image);
        var container = document.querySelector("#div");

        var template = `
	      <div class="divImg">
		<div class="display-P">
		    <img src="${pokemon.image}">
		</div>
		<div class="N-pokemon">
		    	<p class="P-pokemon">${pokemon.name}</p>
		</div>
	      </div> 
       
       `;
        container.innerHTML += template;
      });
  }
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
