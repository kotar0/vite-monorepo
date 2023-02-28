import { Button } from '@mui/material';
import { default as Grid } from '@mui/material/Unstable_Grid2';
import { useContext } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';
import { Count } from '../components/Count';
import { GlobalContext, IGlobalContext } from '../providers/SampleGlobalProvider';

// const fetcher = axios.post('/login').then((res) => res);

export const Counter = ({
  title,
  data,
}: {
  title: string;
  data?: { id: string; firstName: string; lastName: string; email: string };
}) => {
  const { setCount } = useContext(GlobalContext) as IGlobalContext;

  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <div className='App'>
          <div>
            <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
              <img src={viteLogo} className='logo' alt='Vite logo' />
            </a>
            <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
              <img src={reactLogo} className='logo react' alt='React logo' />
            </a>
          </div>
          <h1>{title}</h1>
          {data && <h2>Hello, {data?.lastName + data?.firstName}</h2>}
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <div className='card'>
            <Button variant='contained' onClick={() => setCount((count: number) => count + 1)}>
              count is&nbsp;{<Count />}
            </Button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
        </div>
      </Grid>
    </Grid>
  );
};
