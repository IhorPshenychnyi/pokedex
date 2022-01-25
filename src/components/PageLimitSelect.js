import { observer } from 'mobx-react-lite';
import pokemons from '../store/pokemons';

const PageLimitSelect = observer(() => {
  return (
    <form
      onSubmit={evt => {
        evt.preventDefault();
        pokemons.fetchPokemonsList();
      }}
    >
      <label>
        The number of items per page:
        <select
          value={pokemons.limit}
          onChange={evt => pokemons.changeLimit(evt.target.value)}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
});

export { PageLimitSelect };
