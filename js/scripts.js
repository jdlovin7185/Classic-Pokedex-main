let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  

  function showModal(pokemon) {
    let name = document.querySelector('.pokeName');
    let height = document.querySelector('.pokeHeight');
    let weight = document.querySelector('.pokeWeight');
    let image = document.querySelector('.pokeImage');
    name.innerText = '';
    height.innerText = 'Height: ' ;
    weight.innerText = 'Weight: ';
    image.src = '';

    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.add('is-visible');

    name.innerText = pokemon.name;
    height.innerText = 'Height: ' + pokemon.height + ' m';
    weight.innerText = 'Weight: ' + pokemon.weight / 10 + ' kg';
    image.src = pokemon.sprites.other.dream_world.front_default;
    image.classList.add('img-fluid');
    image.classList.add('mb-2');
    name.classList.add('text-capitalize');


    let button = document.querySelector('.close');
  
  
    button.addEventListener('click', function (event) {
      modalContainer.classList.remove('is-visible');
    });
  }


  function add(pokemon) {
    if (
      typeof pokemon === "object" && "name" in pokemon
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
    button.classList.add('btn');
    button.classList.add('group-list-item');
    button.classList.add('text-capitalize')
    listItem.appendChild(button);
    ul.appendChild(listItem);
    button.addEventListener('click', function (event) {
      loadDetails(pokemon);
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
    }).then(function (pokemon) {

      showModal(pokemon)
    }).catch(function (e) {
      console.error(e);
    });
  }

  
  

  return {
    add: add,
    getAll: getAll,
    showModal: showModal,
    addListItem: addListItem,
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


