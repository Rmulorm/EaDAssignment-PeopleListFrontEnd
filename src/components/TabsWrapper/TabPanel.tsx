import React, { FunctionComponent } from 'react';

interface TabPanelProps {
  value: string,
  index: string
}

const TabPanel: FunctionComponent<TabPanelProps> = (props) => {
  const { children, value, index } = props;

  return (
    <div
      role="tabPanel"
      hidden={value.localeCompare(index) !== 0}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {children}
    </div>
  );
}

export default TabPanel;