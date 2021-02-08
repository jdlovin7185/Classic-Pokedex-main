let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  

  function showModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.add('is-visible');
    showDetails(pokemon);
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
      //update the html modal dom
      let pokeName = document.querySelector('.pokeName');
      pokeName.querySelector('h1');
      pokeName.innerText = pokemon.name;
      console.log('Hey Im in the modal', pokemon);
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
      // Move to the modal
         // item.imageUrl = details.sprites.front_default;
         // item.height = details.height;
         // item.types = details.types;
      showModal(details)
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

