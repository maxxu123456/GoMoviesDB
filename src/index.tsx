import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import Movies from './Components/Movies';
import Genres from './Components/Genres';
import EditMovie from './Components/EditMovie';
import ManageCatalogue from './Components/ManageCatalogue';
import GraphQL from './Components/GraphQL';
import Login from './Components/Login';
import MovieComponent from './Components/Movie';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/movies",
        element: <Movies />
      },
      {
        path: "/movies/:id",
        element: <MovieComponent />
      },
      {
        path: "/genres",
        element: <Genres />
      },
      {
        path: "/admin/movie/0",
        element: <EditMovie />
      },
      {
        path: "/manage-catalogue",
        element: <ManageCatalogue />
      }, {
        path: "/graphql",
        element: <GraphQL />
      }, {
        path: "/login",
        element: <Login />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

