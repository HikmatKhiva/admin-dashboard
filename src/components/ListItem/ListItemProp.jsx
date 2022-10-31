import { ListItem } from '@mui/material'
import React from 'react'
import './list.css'
const ListItemProp = ({ text, number }) => {
  return (
    <ListItem className='list-item'>
      <span className="list-text">{text}</span>
      <span className="list-number">{number}</span>
    </ListItem>
  )
}

export default ListItemProp