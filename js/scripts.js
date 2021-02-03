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

  function addListItem(pokemon) {
    let ul = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('buttons');
    listItem.appendChild(button);
    ul.appendChild(listItem);
    button.addEventListener('click', function (event) {
      showDetails(pokemon);

    });
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return {
    add: add,
    getAll:getAll,
    addListItem: addListItem,
    showDetails: showDetails,
  };
})();


pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
})

