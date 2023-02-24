import { RouterProvider } from 'react-router-dom';
import { router } from '../routes/Router';
import { MuiThemeProvider } from './MUIthemeProvider';
import { SampleGlobalProvider } from './SampleGlobalProvider';

export const AppProviders = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <SampleGlobalProvider>
        <MuiThemeProvider>
          <RouterProvider router={router} />
          {children}
        </MuiThemeProvider>
      </SampleGlobalProvider>
    </>
  );
};
