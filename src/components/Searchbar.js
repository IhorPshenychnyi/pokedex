import { observer } from 'mobx-react-lite';
import pokemons from '../store/pokemons';

const Searchbar = observer(() => {
  const handleSubmit = evt => {
    evt.preventDefault();

    if (pokemons.searchQuery.trim() === '') {
      return;
    }

    pokemons.searchPokemonByName();
    pokemons.searchChange('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">
        <span>Search</span>
      </button>

      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search pokemon"
        value={pokemons.searchQuery}
        onChange={evt =>
          pokemons.searchChange(evt.currentTarget.value.toLowerCase())
        }
      />
    </form>
  );
});

export { Searchbar };
