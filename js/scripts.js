let pokemonList = [
  { name: "Charizard", height: 1.7, type: ['fire','flying'] },
{name: "Staryu", height: 0.8, type: ['water'] },
{name: "Onix", height: 8.8, type: ['rock','ground'] },
{name: "Starmie", height: 1.1, type: ['psychic','water'] }
];

for (let i=0; i < pokemonList.length; i++){
  if (pokemonList[i].height <20 && pokemonList[i].height >1.6){
    document.write(pokemonList[i].name + " height: " + pokemonList[i].height + " That's a big dude . . . ");
  }else if (pokemonList[i].height <1) {
    document.write(pokemonList[i].name + " height: " + pokemonList[i].height + " Dog friendly ");
  }else {
    document.write(pokemonList[i].name + " Kinda big but not really, probably would mess your day up ");
  }
}