import React from 'react';



export interface iState {
  episodes: any[],
  favorites: any[]
}

export interface iAction {
  type: string,
  payload: iEpisode[] | any
};

export type iDispatch = React.Dispatch<iAction>;

export interface iEpisode {
  airdate: string,
  airstamp: string,
  airtime: string,
  id: number
  image: { medium: string, original: string }
  name: string,
  number: number
  runtime: number
  season: number
  summary: string,
  url: string,
};