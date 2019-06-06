import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StoreProvider } from './Store';
import { Router, RouteComponentProps } from '@reach/router';
import HomePage from './HomePage';
import FavPage from './FavPage';
import ToDo from './ToDo';

const RouterPage = (props: { path: string, pageComponent: JSX.Element & RouteComponentProps }) => props.pageComponent;

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path='/'>
        <RouterPage pageComponent={<HomePage />} path="/" />
        <RouterPage pageComponent={<FavPage />} path="/favs" />
        <RouterPage pageComponent={<ToDo />} path="/todo" />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
