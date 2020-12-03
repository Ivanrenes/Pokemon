$(function(){


const button = document.querySelector('#button')
const search = document.querySelector('#search')
const arrayFecht = []




search.addEventListener('keyup', delay(function(){
	let search = document.getElementById('search').value;
	  console.log(search)
  
},600))


window.addEventListener('load', writing())



function writing(){
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    fetch(url).then(response => response.json())
	.then(data =>{
	    let pokemons = data.results;
	    let template = ''
	  let pokemonNames = pokemons.map(x => x.name)
	      console.log(pokemonNames)      
	  pokemonNames.forEach(pokemonName =>{
	      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(response => response.json())
		.then(imgdata =>{ 
		  const ImgPokemon = imgdata.sprites.front_shiny      
		    var container = document.querySelector('#divImg');
		    var pokemonBox = document.createElement('h1');
		    var pokemonImgSrc = document.createTextNode(ImgPokemon)
		    container.appendChild(pokemonBox);
		   pokemonBox.appendChild(pokemonImgSrc)
		var pokemonNameSrc = document.createTextNode(pokemonName)
		  pokemonBox.appendChild(pokemonNameSrc);
		   
		})
	  })

	     console.log(data)
	  
	})
}

 function delay(callback, ms){
        
        var timer = 0;
               return function(){
        
            var context = this,
            args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
            callback.apply(context, args);
          }, ms || 0);

        }
    }

//button.addEventListener('click', ()=>{    
   // let caja = document.getElementById('caja').value;
    //let imgdata= document.getElementById('img');
    //let p = document.getElementById('info');
    
    //const uri = ``
      //fetch(uri).then(response => response.json())
	 // .then(data =>{
	   //   const img = new Image;
	     // imgdata.src = 	    //p.innerHTML = data.species.name
	 // })
//})

})



