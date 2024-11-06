import { RouterProvider } from 'react-router-dom';
import { router } from '../routes/router';
import { Provider } from 'react-redux';
import store from '../state/stores/store';

export default function Providers() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}
