
const button = document.querySelector('#button')
button.addEventListener('click', ()=>{
    
    let caja = document.getElementById('caja').value;
    let imgdata= document.getElementById('img');
    let p = document.getElementById('info');
    
    const uri = `https://pokeapi.co/api/v2/pokemon/${caja}`
      fetch(uri).then(response => response.json())
	  .then(data =>{
	      const img = new Image;
	      imgdata.src = data.sprites.front_shiny
	    p.innerHTML = data.species.name
	  })
})

