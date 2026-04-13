import { Outlet, useLocation } from 'react-router-dom';
import in1 from '../assets/image/in1.jpg';
import up2 from '../assets/image/up2.png';

const AuthLayout = () => {
  const location = useLocation();

  const isSignUp = location.pathname.includes('signup');
  const image = isSignUp ? in1 : up2;

  return (
    <section className="min-h-screen bg-zinc-100 text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">

        <div className="relative flex items-center justify-center border-b-2 border-zinc-300 lg:border-b-0 lg:border-r-2">

          <img
            src={image}
            alt="anime"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-3xl font-bold">
              {isSignUp ? "Start Your Journey" : "Welcome Back"}
            </h1>
            <p className="mt-2 text-sm">
              {isSignUp
                ? "Create your account to explore anime"
                : "Log in to continue your experience"}
            </p>
          </div>

        </div>

        <main className="flex items-center bg-zinc-50 px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>

      </div>
    </section>
  );
};

export default AuthLayout;