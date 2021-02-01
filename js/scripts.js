let pokemonRepository = (function () {
  let pokemonList = [
  {name: "Charizard", height: 1.7, type: ['fire','flying'] },
  {name: "Staryu", height: 0.8, type: ['water'] },
  {name: "Onix", height: 8.8, type: ['rock','ground'] },
  {name: "Starmie", height: 1.1, type: ['psychic','water'] }
]   
  function add(pokemon) {
   pokemonList.push(pokemon);
  }
  
  function getAll() {
   return pokemonList;
  }

  return {
    add: add,
    getAll:getAll
  };
})();


pokemonRepository.getAll().forEach(function(pokemon) {
  if (pokemon.height <20 && pokemon.height >1.6){
    document.write(pokemon.name + " height: " + pokemon.height + " That's a big dude . . . ");
  }else if (pokemon.height <1) {
    document.write(pokemon.name + " height: " + pokemon.height + " Dog friendly ");
  }else {
    document.write(pokemon.name + " In between ");
  }
})

