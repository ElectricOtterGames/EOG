import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import BlogNav from './BlogNav.jsx';
import Home from './pages/Home.jsx';
import Cassie from './pages/Cassie.jsx';
import DevBlog from './pages/DevBlog.jsx';
import './custom.scss';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';

const HeaderLayout = () => (
  <>
    <header>
      <BlogNav />
    </header>
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
  element: <HeaderLayout />,
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/cassie',
      element: <Cassie />,
    },
    {
      path: '/devblog',
      element: <DevBlog />,
    }
  ]
}
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
