import { Outlet } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar/Navbar';
import Footer from '../components/Layout/Footer/Footer';
import { Toaster } from 'sonner';

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
        <Toaster richColors pauseWhenPageIsHidden={true} />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
