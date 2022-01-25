import { makeAutoObservable } from 'mobx';

class Pokemon {
  pokemons = [];
  poke = null;
  limit = '10';
  searchQuery = '';
  isPokemonName = false;

  constructor() {
    makeAutoObservable(this);
  }

  searchPokemonByName() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.searchQuery}`)
      .then(response => response.json())
      .then(pokemon => console.log((this.poke = pokemon)));
    this.isPokemonName = true;
  }

  searchChange(evt) {
    this.searchQuery = evt;
  }

  fetchPokemonsList() {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${this.limit}`)
      .then(response => response.json())
      .then(({ results }) => (this.pokemons = results));
  }

  fetchPokemonInfo(url) {
    fetch(url)
      .then(response => response.json())
      .then(pokemon => console.log((this.poke = pokemon)));
  }

  loadMore() {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${this.limit}&offset=${this.limit}`,
    )
      .then(response => response.json())
      .then(({ results }) => (this.pokemons = [...this.pokemons, ...results]));
  }

  onCloseModal() {
    this.poke = null;
  }

  changeLimit(page) {
    this.limit = page;
  }
}
export default new Pokemon();
