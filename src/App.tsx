import React, { useContext, Fragment } from 'react';
import { Store } from './Store';
import { Link } from '@reach/router';

const App = (props: any): JSX.Element => {
  const { state } = useContext(Store);

  return (
    <Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick you favorite episode</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="favs">Favorites: {state.favorites.length}</Link>
        </div>
      </header>
      {props.children}
    </Fragment>
  );
}

export default App;
