import React, { useContext } from 'react';
import { Store } from './Store';
import { toggleFavAction } from './Actions';

const EpisodesList = React.lazy<any>(() => import('./EpisodesList'));

const FavPage: React.FC = (): JSX.Element => {
  const { state, dispatch } = useContext(Store);

  return (
    <React.Suspense fallback="...loading">
      <div className="episode-layout">
        <EpisodesList
          state={state}
          dispatch={dispatch}
          episodes={state.favorites}
          toggleFavAction={toggleFavAction}
          favorites={state.favorites}
        />
      </div>
    </React.Suspense>
  )
}

export default FavPage;
