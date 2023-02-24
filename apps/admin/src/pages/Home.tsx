import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { default as Grid } from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/system';
import { useContext } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';
import { GlobalContext, IGlobalContext } from '../providers/SampleGlobalProvider';

export const Home = () => {
  const { setCount } = useContext(GlobalContext) as IGlobalContext;

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Project Name
            </Typography>
            <Button color='inherit'>Login</Button>
          </Toolbar>
        </AppBar>
        <Drawer
          variant='permanent'
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box maxWidth='xl' sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
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
                <h1>Vite + React</h1>
                <div className='card'>
                  <Button
                    variant='contained'
                    onClick={() => setCount((count: number) => count + 1)}
                  >
                    count is {<Count />}
                  </Button>
                  <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                  </p>
                </div>
                <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

function Count() {
  const { count } = useContext(GlobalContext) as IGlobalContext;
  return <span>{count}</span>;
}
