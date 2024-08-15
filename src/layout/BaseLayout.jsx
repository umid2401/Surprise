import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const BaseLayout = ({ SidebarComponent,     HeaderComponent }) => {
    const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  return (
    <div className="flex w-full justify-between">
      <aside
        className={`${
          isSidebarOpen
            ? "min-300:translate-x-[-100%]"
            : "min-900:hidden "
        } min-900:sticky min-900:translate-x-0 min-900:top-0 min-900:left-0 min-900:h-[100vh] min-300:h-screen w-full min-900:w-[350px] min-300:absolute z-20`}
      >
        <SidebarComponent />
      </aside>
      <div
        className={`w-full  ${
          !isSidebarOpen ? "min-900:max-w-calc2" : "min-900:max-w-calc1"
        }`}
      >
        <header className="fixed top-0 right-0 z-100 w-full bg-red-400">
          <HeaderComponent />
        </header>
        <main className="w-full bg-[whitesmoke] p-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default BaseLayout;