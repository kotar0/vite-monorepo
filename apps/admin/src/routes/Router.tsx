import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AppShell } from '../layout/AppShell';
import { LoginPage } from '../pages/LoginPage';
import { UserPage } from '../pages/UserPage';
import { AuthGuard } from './AuthGuard';

const HomePage = lazy(() => import('../pages/HomePage'));

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
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
              <HomePage />
            </Suspense>
          </AuthGuard>
        ),
      },
      {
        path: '/user',
        element: <UserPage />,
      },
    ],
  },
]);
