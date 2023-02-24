import { RouterProvider } from 'react-router-dom';
import { router } from '../routes/Router';
import { SampleGlobalProvider } from './SampleGlobalProvider';

export const AppProviders = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <SampleGlobalProvider>
        <RouterProvider router={router} />
        {children}
      </SampleGlobalProvider>
    </>
  );
};
