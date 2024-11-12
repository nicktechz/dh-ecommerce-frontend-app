import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../routes/Layout';
import Home from '../../routes/home/Home';
import Cart from '../../routes/cart/Cart';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/carrito',
        element: <Cart />,
      },
    ],
  },
  {},
  {},
]);
