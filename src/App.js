import { LeftPanel } from './components/LeftPanel';
import { MainUi } from './components/MainUi';
import { RightPanel } from './components/RightPanel';
import MainAppProvider from './context';

import { Stack } from '@mui/material';

function App() {
  return (
    <MainAppProvider>
      <Stack flexDirection={'row'}>
        <LeftPanel />
        <MainUi />
        <RightPanel />
      </Stack>
    </MainAppProvider>
  );
}

export default App;
