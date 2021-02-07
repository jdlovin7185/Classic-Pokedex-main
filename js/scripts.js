let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  

  function showModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.add('is-visible');

    document.querySelector('#show-modal').addEventListener('click', () => {
      showModal();
    });
  }
// The test area - - - - -  - - - - - - - - - - -  - - - - -- -  --  -
  function add(pokemon) {
    if (
      typeof pokemon === "object" && "name"in pokemon
    ) {
   pokemonList.push(pokemon);
  } else {
    console.log("pokemon is not correct")
  }
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
    loadDetails(pokemon).then(function () {
    let pokeName = pokemon.name;
    let pokeHeight = pokemon.height;
    let PokeType = pokemon.type;
    console.log(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  
  

  return {
    add: add,
    getAll:getAll,
    showModal: showModal,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();
pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

