
import Topbar from './Topbar';
  import { ToastContainer } from 'react-toastify';


const Layout= ({ children }) => { 
  return (
        <div className="min-h-screen overflow-hidden relative bg-white text-[#F0F0F0] flex flex-col items-center justify-center w-full">
              <Topbar />
      <main className="flex-1   bg-white w-full min-h-screen ">
        {children}
      </main>
        <ToastContainer />
    </div>
  );
};

export default Layout;
