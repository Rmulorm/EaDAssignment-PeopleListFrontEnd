import React, { FunctionComponent } from 'react';

interface TabPanelProps {
  value: string,
  index: string
}

const TabPanel: FunctionComponent<TabPanelProps> = (props) => {
  const { children, value, index } = props;

  const renderChildren = () => {
    if (value === index) {
      return(
        children
      )
    }
  }

  return (
    <div
      role="tabpanel"
      hidden={value.localeCompare(index) !== 0}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {renderChildren()}
    </div>
  );
}

export default TabPanel;