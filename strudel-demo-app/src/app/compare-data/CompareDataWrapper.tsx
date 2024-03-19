import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { basename } from '../App';
import { TopBar } from '../../components/TopBar';
import { CompareDataProvider } from './context/ContextProvider';
import { GridColDef } from '@mui/x-data-grid';
import { useDataFromSource } from '../../utils/useDataFromSource';
import definitions from './definitions.json'

/**
 * Top-level wrapper for the compare-data Task Flow templates.
 * Inner pages are rendered inside the `<Outlet />` component
 */
export const CompareDataWrapper: React.FC = () => {
  const scenarios = useDataFromSource('default/compare-data/scenarios.json', basename);

  /**
   * Content to render on the page for this component
   */
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <TopBar />
      </Box>
      <Box>
        {/* strudel-kit-variable-next-line */}
        <CompareDataProvider data={scenarios || []} columns={definitions.columns.list.table} dataIdField='id'>
          <Outlet />
        </CompareDataProvider>
      </Box>
    </Box>
  )
}

export type CompareDataGridColDef = GridColDef & {
  isComparisonMetric?: boolean;
}