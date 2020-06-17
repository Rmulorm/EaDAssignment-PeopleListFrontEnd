import React, { FunctionComponent, useState, useEffect, FormEvent } from 'react';
import DatePicker from 'react-date-picker';
import { FiSearch, FiCalendar } from 'react-icons/fi';

import './FindTab.css'

import api from '../../../services/api';
import Person from '../../../types/Person';
import PeopleList from '../PeopleList/PeopleList';

const FindBirthDayTab: FunctionComponent = () => {

  const[listData, setListData] = useState<Person[]>();
  const[beginDate, setBeginDate] = useState<Date>(new Date());
  const[endDate, setEndDate] = useState<Date>(new Date());

  useEffect(() => {
    updateList();
  }, []);

  const updateList = async () => {
    await api.get<Person[]>('list', { params: {
      beginDate: beginDate,
      endDate: endDate
    }})
    .then((response) => {
      const receivedList = new Array<Person>();
      response.data.forEach((person) => {
        receivedList.push({
          name: person.name,
          cpf: Number(person.cpf),
          rg: Number(person.rg),
          birthDay: new Date(person.birthDay),
          cityOfBirth: person.cityOfBirth
        });
      });
      setListData(receivedList);
    });
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();

    updateList();
  };

  const handleDateChange = (newDate: Date | Date[], dateSetter: Function) => {
    if (Array.isArray(newDate)) {
      dateSetter(newDate[0]);
    } else {
      dateSetter(newDate);
    }
  }
  
  return(
    <div style={ {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: 'inherit',
      height: '100%',
      maxHeight: 'inherit'
    } } >
      <form onSubmit={handleFormSubmit} >
        <div className="Controllers" >
          <DatePicker
            onChange={(date) => handleDateChange(date, setBeginDate)}
            value={beginDate}
            calendarIcon={<FiCalendar />} />
          <DatePicker
            onChange={(date) => handleDateChange(date, setEndDate)}
            value={endDate}
            calendarIcon={<FiCalendar />} />
          <button type="submit">
            <FiSearch size={25} color="#fff" />
          </button>
        </div>
      </form>
      <PeopleList
        listData={listData}
      />
    </div>
  );
}

export default FindBirthDayTab;