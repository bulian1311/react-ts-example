import React, { useContext, Fragment } from 'react';
import { Store } from './Store';
import { Link } from '@reach/router';

interface iProps {
  path: string
}

const App: React.FC<iProps> = (props: any): JSX.Element => {
  const { state } = useContext(Store);

  return (
    <Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick you favorite episode</p>
        </div>
        <div>
          <Link to="/">Home</Link>{' '}
          <Link to="favs">Favorites: {state.favorites.length}</Link>{' '}
          <Link to="/todo">Todo</Link>
        </div>
      </header>
      {props.children}
    </Fragment>
  );
}

export default App;
