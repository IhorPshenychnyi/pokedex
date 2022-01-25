import { observer } from 'mobx-react-lite';
import pokemons from '../store/pokemons';

const Button = observer(() => {
  return (
    <button type="button" onClick={() => pokemons.loadMore()}>
      Load more
    </button>
  );
});

export { Button };
