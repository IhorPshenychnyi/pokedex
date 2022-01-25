import { observer } from 'mobx-react-lite';
import pokemons from '../store/pokemons';

const PokemonDetailsCard = observer(() => {
  return (
    <>
      <img
        src={pokemons.poke.sprites.other['official-artwork'].front_default}
        width="240"
        height="100"
        alt={pokemons.poke.name}
      />
      <p>type</p>
      <ul>
        {pokemons.poke.types.map(entry => (
          <li key={entry.type.name}>{entry.type.name}</li>
        ))}
      </ul>
      <h2>{pokemons.poke.name}</h2>
      <ul>
        {pokemons.poke.stats.map(entry => (
          <li key={entry.stat.name}>
            {entry.stat.name}: {entry.base_stat}
          </li>
        ))}
      </ul>
    </>
  );
});

export { PokemonDetailsCard };
