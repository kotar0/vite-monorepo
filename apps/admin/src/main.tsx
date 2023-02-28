import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);

if (import.meta.env.MODE === 'development') {
  const { worker } = await import('./mocks/browser');
  await worker.start({ onUnhandledRequest: 'bypass' });
  root.render(<App />);
  // import('./mocks/browser')
  //   .then(({ worker }) => {
  //     worker.start();
  //   })
  //   .then(() => {
  //     root.render(<App />);
  //   });
} else {
  root.render(<App />);
}
