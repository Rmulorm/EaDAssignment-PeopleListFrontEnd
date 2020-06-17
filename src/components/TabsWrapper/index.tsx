import React, { useState, useEffect, FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import './styles.css';

import TabPanel from './TabPanel';
import UploadTab from './Tabs/UploadTab';
import EntireListTab from './Tabs/EntireListTab';
import FindCpfTab from './Tabs/FindCpfTab';
import FindNameTab from './Tabs/FindNameTab';
import FindBirthDayTab from './Tabs/FindBirthDayTab';
import api from '../../services/api';
import Person from '../../types/Person';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    maxHeight: '720px'
  },
  tabs: {
    width: '20%',
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const TabsWrapper: FunctionComponent = () => {
  const classes = useStyles();

  const[isListEmpty, setListEmpty] = useState<boolean>(true);
  const[tabsValue, setTabsValue] = useState<string>("uploadList");

  useEffect(() => {
    checkIfListIsEmpty();
  }, []);
    
  const checkIfListIsEmpty = async () => {
    await api.get<Person[]>('list')
    .then((response) => {
      if (response.data.length > 0) {
        setListEmpty(false);
        setTabsValue("entireList");
      }
    });
  }

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    event.preventDefault();
    setTabsValue(newValue);
  }

  return(
    <div className="TabsWrapper" >
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={tabsValue}
          onChange={handleTabChange}
          className={classes.tabs} >
          <Tab
            label="Carregar Lista"
            value="uploadList" />
          <Tab
            label="Lista Completa"
            value="entireList"
            disabled={isListEmpty} />
          <Tab
            label="Encontrar por CPF"
            value="cpfQuery"
            disabled={isListEmpty} />
          <Tab
            label="Encontrar por Name"
            value="nameQuery"
            disabled={isListEmpty} />
          <Tab
            label="Encontrar por Data de Nascimento"
            value="birthDayQuery"
            disabled={isListEmpty} />
        </Tabs>
        <TabPanel value={tabsValue} index="uploadList">
          <UploadTab
            isListEmpty={isListEmpty}
            checkIfListIsEmpty={checkIfListIsEmpty} />
        </TabPanel>
        <TabPanel value={tabsValue} index="entireList">
          <EntireListTab />
        </TabPanel>
        <TabPanel value={tabsValue} index="cpfQuery">
          <FindCpfTab />
        </TabPanel>
        <TabPanel value={tabsValue} index="nameQuery">
          <FindNameTab />
        </TabPanel>
        <TabPanel value={tabsValue} index="birthDayQuery">
          <FindBirthDayTab />
        </TabPanel>
      </div>
    </div>
  )
}

export default TabsWrapper;
