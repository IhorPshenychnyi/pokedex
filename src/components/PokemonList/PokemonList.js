import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import pokemons from '../../store/pokemons';
import s from './PokemonList.module.css';
import { Modal } from '../Modal/Modal';

const PokemonList = observer(() => {
  useEffect(() => {
    pokemons.fetchPokemonsList();
  }, []);

  return (
    <div>
      <ul className={s.PokemonList}>
        {pokemons.pokemons.map(pokemon => {
          return (
            <li
              key={pokemon.name}
              className={s.PokemonListItem}
              onClick={() => {
                pokemons.fetchPokemonInfo(pokemon.url);
              }}
            >
              <h2>{pokemon.name}</h2>
            </li>
          );
        })}
      </ul>
      {pokemons.poke && <Modal />}
    </div>
  );
});

export { PokemonList };
