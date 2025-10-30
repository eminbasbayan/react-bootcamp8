import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <main className="pt-20 pb-10 min-h-[calc(100vh-80px)]">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
