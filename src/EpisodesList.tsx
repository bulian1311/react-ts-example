import React from 'react';
import { iEpisode } from './interfaces';

const EpisodesList = (props: any): JSX.Element => {
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
