import React, { useState } from 'react';
import { FormControl, List, MenuItem, Select } from '@mui/material';
import DateSaleItem from '../../components/DateSaleItem/DateSaleItem';
import { BasicDateTimePicker, Chart, CustomerTable } from '../../components/export';
import ListItemProp from '../../components/ListItem/ListItemProp';
import { SaleData, dataList } from '../../data';
import './home.css';
const Home = () => {
  const [customerTableNumber, setCustomerTableNumber] = useState(10);
  const [searchUser, setSearchUser] = useState('');
  const changeCustomers = (event) => {
    setCustomerTableNumber(event.target.value)
  }
  return (
    <div className='home'>
      <span className='home-logo'>Dashboard</span>
      {/* Sale Data */}
      <div className="flex-container data-sale">
        {SaleData && SaleData.map(value => (
          <DateSaleItem  
          key={value.id} 
          icon={value.icon} 
          iconArrow={value.iconArrow} 
          upSale={value.upData} 
          saleText={value.text} 
          addPr={value.addPr}
          saleNumber={value.number} />
        ))}
      </div>
      <div className="statistic-container">
        {/* Statistic */}
        <div className="statistic">
          <div className="statistic-header  between">
            <span className="stat-header__logo">Statistik Pemesanan</span>
            {/* <span className="stat-header__date">18/12/2021</span> */}
            <BasicDateTimePicker />
          </div>
          {/* Chart */}
          <Chart />
        </div>
        {/* Statistic table */}
        <div className="statistic-table">
          <div className="stat-table__header j-center">
            {/* Logo */}
            <span className="stat-table__logo">
              Customer Pemesan Terbanyak
            </span>
          </div>
          <List className='stat-table__list'>
            {dataList && dataList.map(value => (
              <ListItemProp key={value.id} text={value.title} number={value.number} />
            ))}
          </List>
        </div>
      </div>
      {/* Table */}
      <div className="table-container">
        <div className="table-header">
          {/* Table Header */}
          <span className="table-logo">
            Overview Pemesanan
          </span>
          {/* Search Input */}
          <input value={searchUser} onChange={(e) => setSearchUser(e.target.value)} type='text' placeholder='Search...' />
          <FormControl className='customers-table__select'>
            <Select
              value={customerTableNumber}
              onChange={changeCustomers}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem defaultValue={20} value={20}>20</MenuItem>
            </Select>
          </FormControl>
        </div>
        <CustomerTable searchUser={searchUser} customerTableNumber={customerTableNumber} />
      </div>
    </div>
  )
}

export default Home