import { RouterProvider } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { router } from '../routes/Router';
import { AuthProvider } from './AuthProvider';
import { MuiThemeProvider } from './MuiThemeProvider';
import { SampleGlobalProvider } from './SampleGlobalProvider';

export const AppProviders = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <MuiThemeProvider>
        <SWRConfig>
          <AuthProvider>
            <SampleGlobalProvider>
              <RouterProvider router={router} />
              {children}
            </SampleGlobalProvider>
          </AuthProvider>
        </SWRConfig>
      </MuiThemeProvider>
    </>
  );
};
