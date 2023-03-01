import { RouterProvider } from 'react-router-dom';
import { router } from '../routes/Router';
import { AuthProvider } from './AuthProvider';
import { MuiThemeProvider } from './MuiThemeProvider';
import { SampleGlobalProvider } from './SampleGlobalProvider';

export const AppProviders = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <SampleGlobalProvider>
        <MuiThemeProvider>
          <AuthProvider>
            <RouterProvider router={router} />
            {children}
          </AuthProvider>
        </MuiThemeProvider>
      </SampleGlobalProvider>
    </>
  );
};
