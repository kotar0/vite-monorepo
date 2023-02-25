import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AppShell } from '../layout/AppShell';
import { User } from '../pages/User';

const Home = lazy(() => import('../pages/Home'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<div>Page is Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/user',
        element: <User />,
      },
    ],
  },
]);
