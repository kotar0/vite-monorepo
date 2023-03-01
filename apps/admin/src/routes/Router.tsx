import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AppShell } from '../layout/AppShell';
import { Login } from '../pages/Login';
import { User } from '../pages/User';
import { AuthGuard } from './AuthGuard';

const Home = lazy(() => import('../pages/Home'));

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        path: '/',
        element: (
          <AuthGuard redirectTo='/login'>
            <Suspense fallback={<div>Page is Loading...</div>}>
              <Home />
            </Suspense>
          </AuthGuard>
        ),
      },
      {
        path: '/user',
        element: <User />,
      },
    ],
  },
]);
