import pokemons from './store/pokemons';
import { PokemonList } from './components/PokemonList/PokemonList';
import { PageLimitSelect } from './components/PageLimitSelect';
import { Button } from './components/Button';
import { Searchbar } from './components/Searchbar';
import { PokemonDetailsCard } from './components/PokemonDetailsCard';

function App() {
  return (
    <div className="App">
      <Searchbar />

      {pokemons.isPokemonName && <PokemonDetailsCard />}
      <PageLimitSelect />
      <PokemonList />
      <Button />
    </div>
  );
}

export default App;
