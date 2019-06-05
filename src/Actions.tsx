import { iEpisode, iAction, iState } from './interfaces';

export const fetchDataAction = async (dispatch: any) => {
  const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
  const data = await fetch(URL);
  const dataJSON = await data.json();

  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes
  });
}

export const toggleFavAction = (state: iState, dispatch: any, episode: iEpisode): iAction => {
  const episodeInFav: boolean = state.favorites.includes(episode);

  let action: iAction = {
    type: 'ADD_FAV',
    payload: episode
  };

  if (episodeInFav) {
    const favWithoutEpisode: iEpisode[] = state.favorites.filter(
      (fav: iEpisode) => fav.id !== episode.id
    );
    action = {
      type: 'REMOVE_FAV',
      payload: favWithoutEpisode
    }
  }

  return dispatch(action);
}