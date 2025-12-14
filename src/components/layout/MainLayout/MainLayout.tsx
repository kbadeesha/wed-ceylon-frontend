import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

export default function MainLayout() {
  return (
    <div style={{ width: '100%', margin: 0, padding: 0 }}>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
