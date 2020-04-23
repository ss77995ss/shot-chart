import React from 'react';
import {
  CSSReset,
  theme,
  ThemeProvider,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/core';
import { CourtProvider } from './hooks/court';
import { CourtPositionsProvider } from './hooks/courtPositions';
import EditMode from './components/EditMode';
import ViewMode from './components/ViewMode';
import './App.css';

function App() {
  return (
    <CourtProvider>
    <CourtPositionsProvider>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Tabs variant="soft-rounded" align="center">
          <TabList>
            <Tab m={2}>EDIT</Tab>
            <Tab m={2}>VIEW</Tab>
          </TabList>
          <TabPanels>
            <TabPanel><EditMode /></TabPanel>
            <TabPanel><ViewMode /></TabPanel>
          </TabPanels>
        </Tabs>
      </ThemeProvider>
    </CourtPositionsProvider>
    </CourtProvider>
  );
}

export default App;
