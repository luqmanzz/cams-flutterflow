import { createContext, useState } from 'react';

const defaultMainAppvalues = {};

export const MainAppContext = createContext(defaultMainAppvalues);

const MainAppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(null);

  return <MainAppContext.Provider value={{ currentPage, setCurrentPage }}>{children}</MainAppContext.Provider>;
};

export default MainAppProvider;
