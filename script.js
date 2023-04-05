const cardContainer = document.querySelector('.card-container');
const getButton = document.querySelector('.get-button');

getButton.addEventListener('click', getPokemonList);

function getPokemonList() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=36')
    .then(response => response.json())
    .then(pokemonList => {
      pokemonList.results.forEach(pokemon => {
        fetchPokemonData(pokemon);
      });
    })
}

function fetchPokemonData(pokemon) {
  let url = pokemon.url;
  fetch(url)
    .then(response => response.json())
    .then(pokemonData => {
      createPokemonCard(pokemonData);
    });
}

function createPokemonCard(pokemonData) {
  const card = document.createElement('div');
  card.classList.add('card');
  
  const sprite = document.createElement('img');
  sprite.src = pokemonData.sprites.front_default;
  
  const number = document.createElement('p');
  number.textContent = '#' + pokemonData.id.toString().padStart(3, '0');
  
  const name = document.createElement('h2');
  name.textContent = pokemonData.name;
  
  const types = pokemonData.types;
  const type = document.createElement('div');
  type.classList.add('type');
  type.classList.add(types[0].type.name);
  type.textContent = types[0].type.name;
  
  card.appendChild(sprite);
  card.appendChild(number);
  card.appendChild(name);
  card.appendChild(type);
  cardContainer.appendChild(card);
  
  switch(types[0].type.name) {
    case 'normal':
      card.style.backgroundColor = '#A8A77A';
      break;
    case 'fire':
      card.style.backgroundColor = '#EE8130';
      break;
    case 'water':
      card.style.backgroundColor = '#6390F0';
      break;
    case 'electric':
      card.style.backgroundColor = '#F7D02C';
      break;
    case 'grass':
      card.style.backgroundColor = '#7AC74C';
      break;
    case 'ice':
      card.style.backgroundColor = '#96D9D6';
      break;
    case 'fighting':
      card.style.backgroundColor = '#C22E28';
      break;
    case 'poison':
      card.style.backgroundColor = '#A33EA1';
      break;
    case 'ground':
      card.style.backgroundColor = '#E2BF65';
      break;
    case 'flying':
      card.style.backgroundColor = '#A98FF3';
      break;
    case 'psychic':
      card.style.backgroundColor = '#F95587';
      break;
    case 'bug':
      card.style.backgroundColor = '#A6B91A';
      break;
    case 'rock':
      card.style.backgroundColor = '#B6A136';
      break;
    case 'ghost':
      card.style.backgroundColor = '#735797';
      break;
    case 'dragon':
      card.style.backgroundColor = '#6F35FC';
      break;
    case 'dark':
      card.style.backgroundColor = '#705746';
      break;
    case 'steel':
      card.style.backgroundColor = '#B7B7CE';
      break;
    case 'fairy':
      card.style.backgroundColor = '#D685AD';
      break;
  }
}
