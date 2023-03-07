import react from '@vitejs/plugin-react-swc';

export const baseConfig = {
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
  },
};
