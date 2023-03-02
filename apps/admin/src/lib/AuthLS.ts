const ACCESS_TOKEN_KEY = 'access-token';

export const useAuthLS = () => {
  // const [value, setValue, remove] = useLocalStorage(ACCESS_TOKEN_KEY)

  const setToken = (token: string) => {
    try {
      localStorage.setItem(ACCESS_TOKEN_KEY, token);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const getToken = () => {
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  };

  const removeToken = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  };

  return {
    setToken,
    getToken,
    removeToken,
  };
};
