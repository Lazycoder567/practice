const superheroes = require("superheroes");
const pokemon = require("pokemon");

const mySuperHeroName = superheroes.random();
const randomPokemonName = pokemon.random();
const allPokemon = pokemon.all();

console.log(mySuperHeroName);
console.log(randomPokemonName);
//console.log(allPokemon);
