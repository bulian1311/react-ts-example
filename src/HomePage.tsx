import React, { useContext } from 'react';
import { Store } from './Store';
import { fetchDataAction, toggleFavAction } from './Actions';

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

const HomePage = () => {
  const { state, dispatch } = useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  return (
    <React.Suspense fallback="...loading">
      <section className="episode-layout">
        <EpisodesList
          state={state}
          dispatch={dispatch}
          episodes={state.episodes}
          toggleFavAction={toggleFavAction}
          favorites={state.favorites}
        />
      </section>
    </React.Suspense>
  )
}

export default HomePage
