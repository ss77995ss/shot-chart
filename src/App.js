import React from 'react';
import { useTranslation } from 'react-i18next';
import { CSSReset, theme, ThemeProvider, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/core';
import { CourtProvider } from './hooks/court';
import { CourtPositionsProvider } from './hooks/courtPositions';
import EditMode from './components/EditMode';
import ViewMode from './components/ViewMode';
import './App.css';

function App() {
  const { t } = useTranslation();

  return (
    <CourtProvider>
      <CourtPositionsProvider>
        <ThemeProvider theme={theme}>
          <CSSReset />
          <Tabs variant="soft-rounded" align="center">
            <TabList>
              <Tab m={2}>{t('edit')}</Tab>
              <Tab m={2}>{t('view')}</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <EditMode />
              </TabPanel>
              <TabPanel>
                <ViewMode />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ThemeProvider>
      </CourtPositionsProvider>
    </CourtProvider>
  );
}

export default App;
