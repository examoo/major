import Topbar from './Topbar';
import { ToastContainer } from 'react-toastify';
import { useState, useEffect } from 'react';
import Login from './Login';

const Layout = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      if (token) {
        setIsAuthenticated(true);
      }
    };
    checkAuth();
  }, []); 
 const Logout = () =>{
    localStorage.setItem('token', '');
    setIsAuthenticated(false);

 }
  if (!isAuthenticated)
    return <Login onAuthenticated={() => setIsAuthenticated(true)} />;

  return (
    <div className="min-h-screen overflow-hidden relative bg-white text-[#F0F0F0] flex flex-col items-center justify-center w-full">
      <Topbar  onLogout={Logout}/>
      <main className="flex-1 bg-white w-full min-h-screen ">
        {children}
      </main>
      <ToastContainer />
    </div>
  );
};

export default Layout;
