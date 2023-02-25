import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);

if (import.meta.env.MODE === 'development') {
  import('./mocks/browser')
    .then(({ worker }) => {
      worker.start();
    })
    .then(() => {
      root.render(<App />);
    });
} else {
  root.render(<App />);
}
