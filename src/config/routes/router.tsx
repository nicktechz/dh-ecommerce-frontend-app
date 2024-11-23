import { createBrowserRouter } from 'react-router-dom';
import Layout from '../../routes/Layout';
import Home from '../../routes/home/Home';
import Cart from '../../routes/cart/Cart';
import OrderConfirmed from '../../routes/cart/routes/OrderConfirmed/OrderConfirmed';
import OrderSummary from '../../routes/cart/routes/OrderSummary/OrderSummary';

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
        children: [
          {
            index: true,
            element: <OrderSummary />,
          },
          {
            path: '/carrito/confirmacion-compra',
            element: <OrderConfirmed />,
          },
        ],
      },
    ],
  },
]);
