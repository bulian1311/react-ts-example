import React from 'react';
import { iState, iEpisode, iDispatch } from './interfaces';


interface iProps {
  state: iState
  episodes: iEpisode
  favorites: iEpisode[]
  toggleFavAction: (state: iState, dispatch: iDispatch, episodes: iEpisode) => {}
  dispatch: iDispatch
}

const EpisodesList: React.FC<iProps> = (props: any): JSX.Element => {
  const { episodes, favorites, toggleFavAction, state, dispatch } = props;
  return (
    episodes.map((episode: iEpisode) => (
      <section key={episode.id} className="episode-box">
        <img src={episode.image && episode.image.medium} alt="qqq" />
        <div>{episode.name}</div>
        <section>
          <div>Season: {episode.season} Number {episode.number}</div>
          <button type="button" onClick={() => toggleFavAction(state, dispatch, episode)}>
            {
              favorites.find(
                (fav: iEpisode) => fav.id === episode.id
              )
                ? 'Unfav'
                : 'Fav'
            }
          </button>
        </section>
      </section>
    ))
  )
}

export default EpisodesList;
