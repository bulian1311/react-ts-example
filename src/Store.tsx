import React, { createContext } from 'react';
import { iState, iAction } from './interfaces';

const initialState: iState = {
  episodes: [],
  favorites: []
};

export const Store = createContext<iState | any>(initialState);


const reducer = (state: iState, action: iAction): iState => {
  switch (action.type) {
    case 'FETCH_DATA':
      return { ...state, episodes: action.payload };
    case 'ADD_FAV':
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FAV':
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
}

export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
