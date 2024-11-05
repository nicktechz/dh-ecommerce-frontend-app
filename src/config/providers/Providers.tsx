import { RouterProvider } from 'react-router-dom';
import { router } from '../routes/router';

export default function Providers() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
